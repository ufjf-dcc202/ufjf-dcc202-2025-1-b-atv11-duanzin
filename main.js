import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDeLista);
btnAdicionar.addEventListener("click", adicionarItemNaLista);
atualizarLista();


function atualizarLista() {
    let lista = getLista();
    olItens.innerHTML = "";
    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        li.style.cursor = "pointer";
        li.title = "Clique para remover";
        li.addEventListener("click", () => {
            removeDaLista(i);
            atualizarLista();
        });
        olItens.appendChild(li);
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

function adicionarItemNaLista() {
    const texto = pEntrada.textContent.trim();
    if (texto && texto !== "Item") {
        adicionaNaLista(texto);
        pEntrada.textContent = "Item";
        atualizarLista();
    }
}