require('dotenv').config(); // Adicionar esta linha no início do arquivo
const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const db = require('./database/db')
const port = process.env.port || 3000
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

server.get('/', (req, res) => {
  return res.render('index.html')
})
server.get('/create-point', (req, res) => {
  return res.render('create-point.html')
})
server.post('/save-point', (req, res) => {
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );  
  `)
  const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      );
    `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ]

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.render('create-point.html', { error: true })
    }
    console.log('Cadastrado com sucesso!')
    console.log(this)
    return res.render('create-point.html', { saved: true })
  }
  db.run(query, values, afterInsertData)
})
server.get('/search', (req, res) => {
  const search = req.query.search
  if (search == '') {
    return res.render('search-results.html', { total: 0 })
  }
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) return console.log(err)
    const total = rows.length
    return res.render('search-results.html', { places: rows, total })
  })
})
server.listen(3000, () => {
  console.log(`
    Servidor executando na porta 3000
    acesse http://localhost:3000
    `)
})
