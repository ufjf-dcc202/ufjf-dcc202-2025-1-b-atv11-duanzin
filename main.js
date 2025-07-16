import { getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDeLista);
atualizarLista();


function atualizarLista() {
    let lista = getLista();
    olItens.innerHTML = "";
    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}