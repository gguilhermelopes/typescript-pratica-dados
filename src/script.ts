import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus =
  | "Paga"
  | "Aguardando Pagamento"
  | "Recusada pela operadora de cartão"
  | "Estornada";

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Email: string;
  Data: string;
  Status: TransacaoStatus;
  ["Forma de Pagamento"]: string;
  ["Valor (R$)"]: TransacaoPagamento;
  ["Cliente Novo"]: 0 | 1;
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  data?.forEach((item) => {
    console.log(item["Valor (R$)"]);
  });
}

handleData();
