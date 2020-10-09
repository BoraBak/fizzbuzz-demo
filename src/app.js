const express = require('express')
const bodyParser = require('body-parser')
const {calcFizzBuzz} = require("./fizzbuzz")
const logger = require('log4js').getLogger("fizzbuzz-demo")
logger.level = "info";

const port = 3000
const app = express()
app.use(bodyParser.json())

function validateInput(req, res) {
    if ((req.body.constructor === Object && Object.keys(req.body).length === 0) || typeof (req.body.count) !== "number") {
        let err = 'Invalid input!';
        res.status(400).send({
            error: err
        })
        logger.error(err)
        return false
    }
    return true
}

app.post('/fizzbuzz', (req, res) => {
    if (!validateInput(req, res)) {
        return
    }

    const fb = calcFizzBuzz()
    const count = req.body.count
    let result = `result for the number ${count} is: ${fb(count)}`;

    logger.info(result)
    res.send(result)
})

app.use((req, res) => {
    let err = 'not-supported HTTP request';
    logger.debug(err)
    res.status(404).send(err)
})

let server = app.listen(port, () => console.log(`fizzbuzz-demo app listening on port ${port}!`));

module.exports = {app, server}