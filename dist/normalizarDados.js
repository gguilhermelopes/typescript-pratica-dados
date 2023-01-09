export default function normalizarDados(transacao) {
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
//# sourceMappingURL=normalizarDados.js.map