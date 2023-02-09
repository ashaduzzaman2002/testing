const express = require('express')
const app = express();
const port = 8000 || process.env.port

app.get('/', (req, res) => {
    res.status(200).json({msg: "Hello World"})
})

app.get('/test', (req, res) => res.status(200).json({msg: "Testing Successful"}))

app.listen(port)