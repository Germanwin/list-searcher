const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is home page')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`listening on port: http://localhost:${PORT}`)
})