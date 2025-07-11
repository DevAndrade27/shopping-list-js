const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputItem.value === "") {
    alert("Por favor, digite um item válido.");
    return;
  }

  const itemDaLista = document.createElement("li");

  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;

  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

inputCheckbox.addEventListener("click", function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through 3px ";
    }else{
        nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemDaLista);

  
  const diaDaSemana = new Date().toLocaleDateString("PT-BR", {
    weekday: "long",
  });
  const data = new Date().toLocaleDateString("pt-BR");
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(itemData);
  listaDeCompras.appendChild(itemDaLista);

  verificarListaVazia();

  inputItem.value = "";
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll('li');
  if(itensDaLista.length === 0){
    mensagemListaVazia.style.display = 'block';
  }else{
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia()

