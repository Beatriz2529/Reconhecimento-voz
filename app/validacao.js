function verificaChuteValorValido(chute){
  const numero = +chute

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
    return
  }

  if(seNumeroMaiorqueValorPermitido(numero)){
   elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
   return
  }

  if(numero === numeroSecreto){
    document.body.innerHTML = `
    <div class="content">
    <img src="imagens/fogos.png" alt="Imagem de três fogos de artificios">
    <h2>Você acertou!</h2>
    <h3>O número secreto é: ${numeroSecreto}</h3>
    <button type="button" class="btn btn-outline-light" id="jogarn">Jogar Novamente</button>
    </div>
    `
  }
   else if(numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>
    O número secreto é menor <i class="bi bi-arrow-down-circle-fill"></i>
    </div>
    `
  } else {
    elementoChute.innerHTML +=
    `
    <div>
    O número secreto é maior <i class="bi bi-arrow-up-circle-fill"></i>
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

document.body.addEventListener("click", e  => {
  if(e.target.id === 'jogarn'){
    window.location.reload()
  }

})