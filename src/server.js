const app = require('./app')

const db = require('./db')

db.sequelize.sync().then(async () => {
  await console.log('Conectado no BD!')
})

app.listen(8080, () => {
  console.log('API SUBIU PAEEE')
})
