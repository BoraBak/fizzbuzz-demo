const express = require('express')
const bodyParser = require('body-parser')
const {calcFizzBuzz} = require("./fizzbuzz")

const port = 3000
const app = express()
app.use(bodyParser.json())

app.post('/fizzbuzz', (req, res) => {
    const fb = calcFizzBuzz()
    const count = req.body.count
    let result = `result for the number ${count} is: ${fb(count)}`;

    res.send(result)
})

app.use((req, res) => {
    res.status(404).send('not-supported HTTP request')
})

app.listen(port, () => console.log(`fizzbuzz-demo app listening on port ${port}!`))
