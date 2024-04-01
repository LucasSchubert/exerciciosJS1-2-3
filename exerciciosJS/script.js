


function somarValoresDosInputs(){

    const inputUm = document.getElementById ('Input1')
    const inputDois = document.getElementById ('Input2')
    const inputTres = document.getElementById ('Input3')

    const valorUm = Number(inputUm.value)
    const valorDois = Number(inputDois.value)
    const valorTres = Number(inputTres.value)

    console.log(valorUm)
    console.log(valorDois)
    console.log(valorTres)

    const resultado = valorUm + valorDois + valorTres 

    console.log(resultado)

    const divResultado = document.getElementById ('divResultado')
    
    divResultado.innerText = resultado
}


