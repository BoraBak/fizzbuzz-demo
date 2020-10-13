const request = require('supertest')
const {app, server} = require('../src/app')

describe('Post Endpoints', () => {
    it('Success to play Fizzbuzz for number 10', async () => {
        const res = await request(app)
            .post('/fizzbuzz')
            .send({count: 10})
        expect(res.statusCode).toEqual(200)
        const expected = '{"response":"1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz","error":null}'
        expect(res.text).toEqual(expected)
    })

    it('Failed to play: n < 1', async () => {
        const res = await request(app)
            .post('/fizzbuzz')
            .send({count: 0})
        expect(res.statusCode).toEqual(400)
        const expected = '{"error":"Invalid input!","response":""}'
        expect(res.text).toEqual(expected)
    })

    it('Failed to play: n != number', async () => {
        const res = await request(app)
            .post('/fizzbuzz')
            .send({count: "10abcd"})
        expect(res.statusCode).toEqual(400)
        const expected = '{"error":"Invalid input!","response":""}'
        expect(res.text).toEqual(expected)
    })

    it('Route not supported', async () => {
        const res = await request(app)
            .post('/xxx')
            .send({count: "10abcd"})
        expect(res.statusCode).toEqual(404)
    })

    it('HTTP request not supported', async () => {
        const res = await request(app)
            .get('/fizzbuzz')
            .send()
        expect(res.statusCode).toEqual(405)
    })

})

afterAll(() => server.close())
