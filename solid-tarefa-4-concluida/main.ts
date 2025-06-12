interface Pagamento {
    valor: number;
    pagar(): void;
}


class PagamentoCheque implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência bancária.`); 
    }
}

class PagamentoCartão implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por cartão.`);
    };
}

class PagamentoDinheiro implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito em dinheiro.`);
    }
}

class PagamentoPorTransferencia implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência bancária.`); 
    }
}

class PagamentoPorPix implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por transferência bancária.`); 
    }
}
const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoTransferencia = new PagamentoPorTransferencia(300);
pagamentoTransferencia.pagar();

const pagamentoCartao = new PagamentoCartão(400);
pagamentoCartao.pagar();
const pagamentoPix = new PagamentoPorPix(500);
pagamentoPix.pagar();
