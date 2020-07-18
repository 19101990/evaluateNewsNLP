const app = require('../server/index')
const supertest = require('supertest')
const request = supertest(app)

test('Check /test endpoint', async done => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.type).toEqual("application/json")
    expect(response.body.message).toBe('Works!')
    done()
})

test('Check / endpoint', async done => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    done()
})

test('Check /data endpoint', async done => {
    const response = await request.get('/data')
    expect(response.status).toBe(200)
    done()
})

test('Check /sentiment-data endpoint', async done => {
    const response = await request.post('/sentiment-data')
    expect(response.status).toBe(200)
    done()
})