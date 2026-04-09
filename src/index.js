const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

const data = {
  integrantes: [
    { nome: 'Marcella Cagliari' },
    { nome: 'Paula Haas' }
  ]
}

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
