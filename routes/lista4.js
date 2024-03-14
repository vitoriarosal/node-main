const express = require('express')
const router = express.Router()

router.post('/ex4', function(req, res){

    const numeros = [1, 20, 17, 9]


    let soma = 0

    for (let n of numeros){
       soma += n

    }

    const media = soma / numeros.length
    
    res.json({media})
})

module.exports = router