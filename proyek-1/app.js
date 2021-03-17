const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs');

app.get('/home', (req, res) => res.render('index'))
app.get('/index', (req, res) => res.render('hal2'))

app.listen(port, () => {
  console.log(`Server Berjalan Lancar Jaya`)
})