import fastify from "fastify";

const app = fastify()

app.post('/events', (request, reply) => {
    console.log(request.body)
    return 'Um Salve'
})


app.get('/', () => {
    return 'Rota Inicial da Aplicação'

})

app.listen({ port: 3333}).then(() => {
    console.log('Server Rodando na porta 3333')

})
