"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cargos_1 = require("./enum/cargos");
var CalcularSalario = /** @class */ (function () {
    function CalcularSalario(salarioBase) {
        if (salarioBase === void 0) { salarioBase = 1000; }
        this.salarioBase = salarioBase;
    }
    CalcularSalario.prototype.calcular = function (cargo) {
        if (cargo === cargos_1.Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }
        else if (cargo === cargos_1.Cargos.Junior) {
            return this.salarioBase * 3;
        }
        else if (cargo === cargos_1.Cargos.Pleno) {
            return this.salarioBase * 5;
        }
        else if (cargo === cargos_1.Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    };
    return CalcularSalario;
}());
exports.default = CalcularSalario;
