const imagem = document.querySelector('img#imgPrincipal')
const carroEscolhido = localStorage.getItem('carroEscolhido')
const valor = document.getElementById('valor')
const diasXvalor = document.getElementById('totalDias')
const quantidadeDias = JSON.parse(localStorage.getItem('quantidadeDias'))

if (carroEscolhido === 'carro1') {
    valor.innerHTML = `R$ ${quantidadeDias*589},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$589,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro1.jpg')
} else if (carroEscolhido === "carro2"){
    valor.innerHTML = `R$ ${quantidadeDias*997},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$997,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro2.jpg')
} else if (carroEscolhido === "carro3"){
    valor.innerHTML = `R$ ${quantidadeDias*338},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$338,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro3.jpg')
} else if (carroEscolhido === "carro4"){
    valor.innerHTML = `R$ ${quantidadeDias*1127},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$1127,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro4.jpg')
} else if (carroEscolhido === "carro5"){
    valor.innerHTML = `R$ ${quantidadeDias*399},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$399,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro5.jpg')
} else if (carroEscolhido === "carro6"){
    valor.innerHTML = `R$ ${quantidadeDias*479},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$479,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro6.jpg')
} else if (carroEscolhido === "carro7"){
    valor.innerHTML = `R$ ${quantidadeDias*296},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$296,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro7.jpg')
} else if (carroEscolhido === "carro8"){
    valor.innerHTML = `R$ ${quantidadeDias*296},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$296,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro8.jpg')
} else if (carroEscolhido === "carro9"){
    valor.innerHTML = `R$ ${quantidadeDias*296},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$296,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro9.jpg')
} else if (carroEscolhido === "carro10"){
    valor.innerHTML = `R$ ${quantidadeDias*296},00`
    diasXvalor.innerHTML = `para ${quantidadeDias} dias de uso R$296,00 por dia`
    imagem.setAttribute('src', '../Imagens/carro10.jpg')
}