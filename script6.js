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