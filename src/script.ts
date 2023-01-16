import { CountList } from "./countBy.js";
import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarDados from "./normalizarDados.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;

  const transacoes = data.map(normalizarDados);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountList, containerId: string) {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}`;
    });
  }
}

function preencherEstatisticas(data: Transacao[]): void {
  const transacoes = new Estatisticas(data);

  preencherLista(transacoes.pagamento, "pagamento");
  preencherLista(transacoes.status, "status");

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = transacoes.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const diaElement = document.querySelector<HTMLElement>("#dia span");
  if (diaElement) {
    diaElement.innerText = `${transacoes.melhorDia[0]}`;
  }
}

function preencherTabela(data: Transacao[]): void {
  const tabela = document.querySelector("#table tbody");

  if (!tabela) return;

  data.forEach((item) => {
    tabela.innerHTML += `
    <tr>
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>R$ ${item.moeda}</td>
    <td>${item.pagamento}</td>
    <td>${item.status}</td>
    </tr>
    `;
  });
}

handleData();
