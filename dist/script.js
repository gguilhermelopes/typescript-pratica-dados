import fetchData from "./fetchData.js";
import normalizarDados from "./normalizarDados.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data)
        return;
    const transacoes = data.map(normalizarDados);
    preencherTabela(transacoes);
}
function preencherTabela(data) {
    const tabela = document.querySelector("#table tbody");
    if (!tabela)
        return;
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
//# sourceMappingURL=script.js.map