const express = require('express')
const bodyParser = require('body-parser')
const {calcFizzBuzz} = require("./fizzbuzz")
const logger = require('log4js').getLogger("fizzbuzz-demo")
logger.level = "info";

const port = 3000
const app = express()
app.use(bodyParser.json())

/**
 * Checks the input is valid
 * @returns {boolean} TRUE - valid, FALSE - else
 */
function isValidInput(req, res) {
    if ((req.body.constructor === Object && Object.keys(req.body).length === 0)
        || typeof (req.body.count) !== "number" || req.body.count < 1) {
        let err = 'Invalid input!';
        res.status(400).send({
            error: err,
            response: ""
        })
        logger.error(err)
        return false
    }
    return true
}

app.post('/fizzbuzz', (req, res) => {
    if (!isValidInput(req, res)) {
        return
    }

    const fb = calcFizzBuzz()
    const count = req.body.count
    let result = `${fb(count)}`;

    logger.info(`result for the number ${count} is: ${result}`)
    res.send({
        response: result,
        error: null
    })
})

app.post('*', (req, res) => {
    let err = 'route not-supported, HTTP response status code: 404 (Not Found)';
    logger.debug(err)
    res.status(404).send()
})

app.use((req, res) => {
    logger.debug('not-supported HTTP request, HTTP response status code: 405 (Method Not Allowed)')
    res.status(405).send()
})

let server = app.listen(port, () => console.log(`fizzbuzz-demo app listening on port ${port}!`));

module.exports = {app, server}
