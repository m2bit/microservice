const app = require("express")()
const external = require("../lib/config")

app.get('/', (req, res) => {
  res.send('Deu certo! ' + external.resp_service_01())
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})