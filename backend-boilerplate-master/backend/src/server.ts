import app from './app'

const PORT = process.env.SERVER_PORT || 3333

console.log(`Iniciando server na porta ${PORT}`)
app.listen(PORT)
