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

function preencherEstatisticas(data: Transacao[]): void {
  const transacoes = new Estatisticas(data);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = transacoes.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
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
