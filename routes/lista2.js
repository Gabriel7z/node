const { json } = require('express')
const express = require('express')
const router = express.Router()


router.post( '/exr1', function (req, res){
    const nota1 =  Number(req.body.n1)
    const nota2 =  Number(req.body.n2)
    const nota3 =  Number(req.body.n3)
    const nota4 = Number(req.body.n4)  
    
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10){
    
      console.log("nota invalida");
    }
    else{
         
        let = media = (nota1 + nota2 + nota3 + nota4) / 4;
         console.log(`sua média é: ${media}`);
        if(media >= 7){
          console.log("aprovado")
        }else{
          console.log("reprovado")
        }
      }




         res.json({media})
})

router.post('/exr2', function (req, res) {


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


router.post('/exr3', function (req, res) {
    const salarioAtual =  Number(req.body.salarioAtual)
    const percentualReajuste = Number(req.body.percentualReajuste)
   

    const valorReajuste = salarioAtual * (percentualReajuste / 100);
    const novoSalario = salarioAtual + valorReajuste;
    
    res.json({novoSalario, valorReajuste})
})

/*4*/
router.post('/exr4', function (req, res) {
const pd = 0.28
const pi = 0.45

const valor_produto = Number(req.body.valor_produto)
const valor_distribuidor = valor_produto * pd;
const valor_imposto = valor_produto * pi;
const valor_final = valor_produto + valor_distribuidor + valor_imposto;



    res.json({valor_final})
})

/*6*/
router.post('/exr6', function (req, res) {
const salario = 1412
const comi = 0.05
const valor_vd_carros = Number(req.body.valor_vd_carros)
const valor_comi = valor_vd_carros * comi
const salario_final = valor_comi + salario
    res.json({salario_final})
})
/*7*/
router.post('/exr7', function (req, res) {

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const peso = 0.4 + 0.6
    const media = (n1 *0.4 + n2 *0.6)
    const mf = media / peso
   

    res.json({mf})
})
/*8*/
router.post('/exr8', function (req, res) {
const pi = Math.PI
const raio = Number(req.body.raio)
const altura =Number(req.body.altura)

const valor = pi * Math.pow(raio, 2) * altura

    res.json({valor})
})
    
/*9*/
router.post('/exr9', function (req, res) {
const n1 = Number(req.body.n1)
const n2 = Number(req.body.n2)

const soma = n1 + n2
const resultado = soma * n1

    
    res.json({resultado})
})
    
module.exports = router