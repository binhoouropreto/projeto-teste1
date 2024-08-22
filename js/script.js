//Parte 1
const numero_visitante = document.querySelector(".numero-visitante");
const numero_da_casa = document.querySelector(".numero-da-casa");
const botaoVisitante = document.querySelector(".botao.visitante");
const botaoDaCasa = document.querySelector(".botao.dacasa");
const botaoReset = document.querySelector(".botao.reset");

//parte 2
botaoDaCasa.addEventListener("click", function () {
	numero_da_casa.innerHTML = +numero_da_casa.innerHTML + 1;
});
botaoVisitante.addEventListener("click", function () {
	numero_visitante.innerHTML = +numero_visitante.innerHTML - 1;
    if (numero_visitante.innerHTML < 0) numero_visitante.innerHTML = +numero_visitante.innerHTML + 1;
    numero_da_casa.innerHTML = +numero_da_casa.innerHTML + 1;
});
botaoReset.addEventListener("click", function () {
	numero_visitante.innerHTML = 0;
    numero_da_casa.innerHTML = 1;
});
