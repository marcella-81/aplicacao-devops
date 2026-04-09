const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})