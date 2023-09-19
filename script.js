const dataPartida = document.getElementById("DataDePartida")
const dataRetorno = document.getElementById("DataDeRetorno")
const dataAtual = new Date
let dataMinRetorno;
let ano = dataAtual.getFullYear()
let mesMin = dataAtual.getMonth()+1
if(mesMin < 10) {
    mesMin = ("0" + mesMin)
}
let mesMax = dataAtual.getMonth()+4
if(mesMax < 10) {
    mesMax = ("0" + mesMax)
}
let dia = dataAtual.getDate()
if(dia < 10) {
    dia = "0" + dia
}
dataPartida.min = `${ano}-${mesMin}-${dia}`
dataPartida.max = `${ano}-${mesMax}-${dia}`
dataRetorno.max = `${ano}-${mesMax}-${dia}`
const datas = document.getElementById("datas")

window.addEventListener('load', () => {
    dataRetorno.disabled = true
})


dataPartida.addEventListener('blur', () => {
    validaDataPartida(dataPartida)
})

function validaDataPartida (dataPartida) {
    if(dataPartida.value != "") {
            dataPartida.style.border = 'none'
            dataRetorno.disabled = false
            dataMinRetorno = dataPartida.value
            dataRetorno.min = dataMinRetorno
            return true
        } else {
            dataPartida.style.border = 'solid red'
            return false
        }
    }

dataRetorno.addEventListener('blur', () => {
    validaDataRetorno(dataRetorno)
})

function validaDataRetorno (dataRetorno) {
    if(dataRetorno.value != ""){
            dataRetorno.style.border = 'none'
            return true
        } else {
            dataRetorno.style.border = 'solid red'
            return false
        }
    }


function procurar() {
   if (validaDataPartida(dataPartida) && validaDataRetorno(dataRetorno)){
        window.location = "RotaDestino.html"
        localStorage.setItem('dataPartida', dataPartida.value)
        localStorage.setItem('dataRetorno', dataRetorno.value)
   } else {
        validaDataPartida(dataPartida)
        validaDataRetorno(dataRetorno)
   }
}