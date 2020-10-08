const express = require('express')

const port = 3000
const app = express()

app.post('/fizzbuzz', (req, res) => {
    res.send("result from POST")
})

app.use((req, res) => {
    res.status(404).send('not-supported HTTP request')
})

app.listen(port, () => console.log(`fizzbuzz-demo app listening on port ${port}!`))
