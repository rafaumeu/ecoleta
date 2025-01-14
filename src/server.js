const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

nunjucks.configure('src/views', {
  express: server,
  noCache: true
})
server.use(express.static('public'))

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html')
})
server.get('/search-results', (req, res) => {
  res.sendFile(__dirname + '/views/search-results.html')
})
server.listen(3000, () => {
  console.log('Servidor executando na porta 3000')
})