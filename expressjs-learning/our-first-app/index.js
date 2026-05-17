const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Harry2')
})

app.get('/about', (req, res) => {
  res.send('I am the about page')
})

// Use this command to run the server in watch mode
// node --watch index.js
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
