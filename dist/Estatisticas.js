import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((a, b) => {
            return a + b.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transacoes.map((item) => item.pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map((item) => item.status));
    }
    setSemana() {
        return countBy(this.transacoes.map((item) => item.data.getDay()));
    }
    setMelhorDia() {
        const MelhorDia = Object.entries(this.semana)
            .map((dia) => {
            if (dia[0] === "0")
                return ["Domingo", dia[1]];
            if (dia[0] === "1")
                return ["Segunda-Feira", dia[1]];
            if (dia[0] === "2")
                return ["Terça-Feira", dia[1]];
            if (dia[0] === "3")
                return ["Quarta-Feira", dia[1]];
            if (dia[0] === "4")
                return ["Quinta-Feira", dia[1]];
            if (dia[0] === "5")
                return ["Sexta-Feira", dia[1]];
            if (dia[0] === "6")
                return ["Sábado", dia[1]];
            else
                return [0, 0];
        })
            .sort((a, b) => +b[1] - +a[1])[0];
        return MelhorDia;
    }
}
//# sourceMappingURL=Estatisticas.js.map