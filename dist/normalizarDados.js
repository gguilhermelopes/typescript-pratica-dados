import moedaParaNumero from "./moedaParaNumero.js";
export default function normalizarDados(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        email: transacao.Email,
        data: transacao.Data,
        status: transacao.Status,
        moeda: transacao["Valor (R$)"],
        valor: moedaParaNumero(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarDados.js.map