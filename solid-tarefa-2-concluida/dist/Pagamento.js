"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagamento = /** @class */ (function () {
    function Pagamento(servicoCalcularSalario) {
        this.servicoCalcularSalario = servicoCalcularSalario;
    }
    Pagamento.prototype.pagar = function (colaborador) {
        var salarioColaborador = this.servicoCalcularSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    };
    return Pagamento;
}());
exports.default = Pagamento;
