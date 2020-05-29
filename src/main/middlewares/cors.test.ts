import request from 'supertest'
import app from '../config/app'

describe('Cors', () => {
  test('Should enable Cors', async () => {
    app.get('/cors_test', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/cors_test')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
