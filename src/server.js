const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const db = require('./database/db')

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
server.use(express.static('public'))

server.get('/', (req, res) => {
  res.render('index.html')
})
server.get('/create-point', (req, res) => {
  res.render('create-point.html')
})
server.get('/search', (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) return console.log(err)
    const total = rows.length
    res.render('search-results.html', {places: rows, total})
  })
})
server.listen(3000, () => {
  console.log(`
    Servidor executando na porta 3000
    acesse http://localhost:3000
    `)
})
