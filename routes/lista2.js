const express = require('express')
const router = express.Router()
router.post('/exr2', function (req, res) {

    const{nome, horastrabalhadas, valordahora, filhos } = req.body
    const salariobruto = horastrabalhadas * valordahora
    const bonificacaofilhos = 0.03 * salariobruto * filhos
    const salariofinal = salariobruto + bonificacaofilhos



  res.json({salariobruto, salariofinal, bonificacaofilhos})
  




})

module.exports = router