const express = require('express')
const app = express()
const port = 5000;
//if I were to send an http request to localhost:500/ then it would send back the string 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/newEndPoint', (req, res) => {
    res.send('a working backend server request')
})

app.get('/test', (req, res) => {
    if (2 + 2 === 4) {
        res.send("2 + 2 does equal 4!");
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

