const supertest = require('supertest')

const request = supertest('http://localhost:8080')

test.skip('Servidor na porta 8080', async () => {
  const resposta = await request.get('/')
  expect(resposta.status).toBe(200)
})
