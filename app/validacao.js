function verificaChuteValorValido(chute){
  const numero = +chute

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
  }

  if(seNumeroMaiorqueValorPermitido(numero)){
   elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
  }

  if(numero === numeroSecreto){
    document.body.innerHTML = `
    <div class="content">
    <img src="imagens/fogos.png" alt="Imagem de três fogos de artificios">
    <h2>Você acertou!</h2>
    <h3>O número secreto é: ${numeroSecreto}</h3>
    </div>
    `
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function seNumeroMaiorqueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}