const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));





app.get('/', function (req, res) {
    res.send('Rota Principal')
})

app.get('/hello', function (req, res) {
    res.send('Chegou a resposta')
})

app.get('/nome', function (req, res) {
    res.send('Orion Teles de Mesquita')
})
 app.post('/lista1/exr1', function (req, res) {


    const t_eleitores = Number(req.body.t_eleitores)
    const v_brancos = Number(req.body.v_brancos)
    const v_nulos = Number(req.body.v_nulos)
    const v_validos = Number(req.body.v_validos)
    let retorno = {}

    if (v_brancos + v_nulos + v_validos > t_eleitores) {
        retorno = {
            codigo: "Soma_eleitores",
            mensagem: " A soma dos votos não pode passar o total de eleitores"

        }
        res.status(400).json(retorno)
    }

    else {
        const p_votos_validos = (v_validos / t_eleitores) * 100;
        const p_votos_brancos = (v_brancos / t_eleitores) * 100;
        const p_votos_nulos = (v_nulos / t_eleitores) * 100;
        retorno = { p_votos_brancos, p_votos_nulos, p_votos_validos }
        res.status(200).json(retorno)
    }




})

app.listen(3000, function () {
    console.log('Server UP port 3000')
})