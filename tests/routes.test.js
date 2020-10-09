const request = require('supertest')
const {app, server} = require('../src/app')

describe('Post Endpoints', () => {
    it('Success to play Fizzbuzz for number 10', async () => {
        const res = await request(app)
            .post('/fizzbuzz')
            .send({count: 10})
        expect(res.statusCode).toEqual(200)
        const expected = 'result for the number 10 is: 12Fizz4BuzzFizz78FizzBuzz'
        expect(res.text).toEqual(expected)
    })

    it('Failed to play', async () => {
        const res = await request(app)
            .post('/fizzbuzz')
            .send({count: "10abcd"})
        expect(res.statusCode).toEqual(400)
        const expected = '{"error":"Invalid input!"}'
        expect(res.text).toEqual(expected)
    })

})

afterAll(() => server.close())