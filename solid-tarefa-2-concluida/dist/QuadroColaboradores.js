"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuadordeColaboradores = /** @class */ (function () {
    function QuadordeColaboradores(_colaboradores) {
        if (_colaboradores === void 0) { _colaboradores = []; }
        this._colaboradores = _colaboradores;
    }
    QuadordeColaboradores.prototype.contratarColaborador = function (colaborador) {
        this._colaboradores.push(colaborador);
    };
    QuadordeColaboradores.prototype.demitirColaborador = function (colaboradorChave) {
        this._colaboradores = this._colaboradores.filter(function (colaborador) { return colaborador !== colaboradorChave; });
    };
    Object.defineProperty(QuadordeColaboradores.prototype, "colaboradores", {
        get: function () {
            return this._colaboradores;
        },
        enumerable: false,
        configurable: true
    });
    return QuadordeColaboradores;
}());
exports.default = QuadordeColaboradores;
