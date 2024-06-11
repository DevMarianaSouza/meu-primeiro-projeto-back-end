const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Mariana Souza',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH5n8hjv1FUew/profile-displayphoto-shrink_200_200/0/1714416269852?e=1723075200&v=beta&t=IUS4nAKKWaFrf_wTGlDSBTohTghK-O4HOAnsuqzXntg',
        minibio: 'Desenvolvedora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)