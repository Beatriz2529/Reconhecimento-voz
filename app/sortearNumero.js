const menorValor = 1
const maiorValor = 1000

 const numeroSecreto = gerarNumeroA()



function gerarNumeroA () {
  return parseInt(Math.random() * maiorValor + 1)
}


const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor

console.log('Número Screto: ', numeroSecreto)
