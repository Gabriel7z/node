const express = require('express')
const router = express.Router()




router.post('/exr1', function (req, res) {


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
router.post('/exr2', function (req, res) {

    const{nome, horastrabalhadas, valordahora, filhos } = req.body
    const salariobruto = horastrabalhadas * valordahora
    const bonificacaofilhos = 0.03 * salariobruto * filhos
    const salariofinal = salariobruto + bonificacaofilhos



  res.json({salariobruto, salariofinal, bonificacaofilhos})
  




})

module.exports = router