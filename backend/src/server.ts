import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return 'Rota Inicial da Aplicação'

})

app.listen({ port: 3333}).then(() => {
    console.log('Server Rodando na porta 3333')

})
