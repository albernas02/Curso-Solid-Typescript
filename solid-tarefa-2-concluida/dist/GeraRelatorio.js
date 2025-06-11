"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeraRelatorio = /** @class */ (function () {
    function GeraRelatorio(quadrodeColaboradores, CalcularSalario) {
        this.quadrodeColaboradores = quadrodeColaboradores;
        this.CalcularSalario = CalcularSalario;
    }
    GeraRelatorio.prototype.gerarJSON = function () {
        var _this = this;
        var relatorio = this.quadrodeColaboradores.map(function (colaborador) {
            return {
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: _this.CalcularSalario.calcular(colaborador.cargo),
            };
        });
        return JSON.stringify(relatorio);
    };
    return GeraRelatorio;
}());
exports.default = GeraRelatorio;
