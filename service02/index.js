const app = require("express")()
const external = require('lib')

app.get('/', (req, res) => {
  res.send('Deu certo! ' + external.resp_service_02())
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})