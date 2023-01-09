import fetchData from "./fetchData.js";
import normalizarDados from "./normalizarDados.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data)
        return;
    const transacoes = data.map(normalizarDados);
    transacoes?.forEach((item) => {
        console.log(item.novo);
    });
}
handleData();
//# sourceMappingURL=script.js.map