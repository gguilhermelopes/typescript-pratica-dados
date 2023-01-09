import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    data?.forEach((item) => {
        console.log(item["Valor (R$)"]);
    });
}
handleData();
//# sourceMappingURL=script.js.map