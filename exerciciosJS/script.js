


function somarValoresDosInputs(){

    const inputUm = document.getElementById ('Input1')
    const inputDois = document.getElementById ('Input2')
    const inputTres = document.getElementById ('Input3')

    const valorUm = Number(inputUm.value)
    const valorDois = Number(inputDois.value)
    const valorTres = Number(inputTres.value)



    const resultado = valorUm + valorDois + valorTres 

    console.log(resultado)

    const divResultado = document.getElementById ('divResultado')
    
    divResultado.innerText = resultado
}

function juntarNomes() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;

  if(nome && sobrenome) {
    var nomeCompleto = nome + " " + sobrenome;
    document.getElementById("nomeCompleto").textContent = "Nome completo = " + nomeCompleto
  } else {
    alert("Para exibir nome completo, você precisa digitar nome e sobrenome!");
  }


}


