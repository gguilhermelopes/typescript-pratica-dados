declare global {
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

  interface Transacao {
    nome: string;
    id: number;
    email: string;
    data: string;
    status: TransacaoStatus;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
  }
}

export default function normalizarDados(transacao: TransacaoAPI) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    email: transacao.Email,
    data: transacao.Data,
    status: transacao.Status,
    moeda: transacao["Valor (R$)"],
    valor: 0,
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
  };
}
