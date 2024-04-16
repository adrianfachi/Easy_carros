const dataPartida = localStorage.getItem("dataPartida");
const dataRetorno = localStorage.getItem("dataRetorno");
const dataEscolhidaPartida = `${dataPartida.slice(-2)}/${dataPartida.slice(
	5,
	7
)}/${dataPartida.slice(0, 4)}`;
const dataEscolhidaRetorno = `${dataRetorno.slice(-2)}/${dataRetorno.slice(
	5,
	7
)}/${dataRetorno.slice(0, 4)}`;
datas.textContent += `${dataEscolhidaPartida} até ${dataEscolhidaRetorno}`;

let diaPartida = Number(dataEscolhidaPartida.slice(0, 2));
let diaRetorno = Number(dataEscolhidaRetorno.slice(0, 2));
const mesPartida = dataEscolhidaRetorno.slice(3, 5);
let quantidadeDias;

if (diaPartida > diaRetorno) {
	if (mesPartida == "02") {
		diaRetorno += 28;
		quantidadeDias = diaRetorno - diaPartida;
	} else if (
		mesPartida == "04" ||
		mesPartida == "06" ||
		mesPartida == "09" ||
		mesPartida == "11"
	) {
		diaRetorno += 30;
		quantidadeDias = diaRetorno - diaPartida;
	} else {
		diaRetorno += 31;
		quantidadeDias = diaRetorno - diaPartida;
	}
} else {
	quantidadeDias = diaRetorno - diaPartida;
}

localStorage.setItem("quantidadeDias", JSON.stringify(quantidadeDias));

const selectStates = document.querySelector("#estados");
const selectCities = document.querySelector("#cidades");
const cidadePartida = document.getElementById("CidadePartida");

const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
window.addEventListener("load", async () => {
	const request = await fetch(urlUF);
	const response = await request.json();

	for (const iterator of response) {
		const criaOption = document.createElement("option");
		criaOption.text = iterator.sigla;
		selectStates.append(criaOption);
	}
});

window.addEventListener("change", async () => {
	const urlCidade = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+selectStates.value+"/municipios";
	const request = await fetch(urlCidade);
	const response = await request.json();

	for (const iterator of response) {
		const criaOption = document.createElement("option");
		criaOption.text = iterator.nome;
		selectCities.append(criaOption);
		localStorage.setItem("LocalDestinoCity", selectCities.value)
		localStorage.setItem("LocalDestinoUF", selectStates.value)
	}
});

cidadePartida.addEventListener("change", () => {
	localStorage.setItem("LocalPartida", cidadePartida.value);
	console.log(localStorage.getItem("LocalPartida"))
});

function visualizarVeiculos() {
	if (
		selectCities.value === "" ||
		selectStates.value === "" ||
		cidadePartida.value === ""
	) {
		alert("Por favor informe a cidade de partida e destino");
	} else {
		window.location = "SelecaoVeiculo.html"
		localStorage.setItem("LocalDestino", localStorage.getItem("LocalDestinoCity") + ", " + localStorage.getItem("LocalDestinoUF"));
	}
}



visualizarVeiculos.addEventListener('click', async function(){
	console.log(localStorage.getItem("LocalDestino"))
	console.log(CidadeUf)
})


