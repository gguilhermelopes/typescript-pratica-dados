import fetchData from "./fetchData.js";
import normalizarDados from "./normalizarDados.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;

  const transacoes = data.map(normalizarDados);
  console.log(transacoes.forEach((i) => console.log(i.valor)));
}

handleData();
