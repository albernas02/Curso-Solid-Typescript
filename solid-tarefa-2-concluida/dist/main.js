{
    var GANHO_POR_HORA_CLT_1 = 24;
    var CARGA_HORARIA_DIARIA_CLT_1 = 8;
    var GANHO_POR_HORA_ESTAGIARIO_1 = 14;
    var CARGA_HORARIA_DIARIA_ESTAGIARIO_1 = 4;
    var GANHO_POR_HORA_PJ_1 = 34;
    var CARGA_HORARIA_DIARIA_PJ_1 = 8;
    var MES_COMERCIAL_1 = 20; //dias trabalhados no mês
    var ContratoClt_1 = /** @class */ (function () {
        function ContratoClt() {
            this.titulo = 'CLT';
        }
        return ContratoClt;
    }());
    var Estagio_1 = /** @class */ (function () {
        function Estagio() {
            this.titulo = 'Estágio';
        }
        return Estagio;
    }());
    var ContratoPJ_1 = /** @class */ (function () {
        function ContratoPJ() {
            this.titulo = 'PJ';
        }
        return ContratoPJ;
    }());
    var FolhaDePagamento = /** @class */ (function () {
        function FolhaDePagamento() {
        }
        FolhaDePagamento.calcularSalarioMensal = function (funcionario) {
            if (funcionario instanceof ContratoClt_1) {
                return GANHO_POR_HORA_CLT_1 * CARGA_HORARIA_DIARIA_CLT_1 * MES_COMERCIAL_1;
            }
            else if (funcionario instanceof Estagio_1) {
                return GANHO_POR_HORA_ESTAGIARIO_1 * CARGA_HORARIA_DIARIA_ESTAGIARIO_1 * MES_COMERCIAL_1;
            }
            else if (funcionario instanceof ContratoPJ_1) {
                return GANHO_POR_HORA_PJ_1 * CARGA_HORARIA_DIARIA_PJ_1 * MES_COMERCIAL_1;
            }
            return 0;
        };
        return FolhaDePagamento;
    }());
    var funcionarioClt = new ContratoClt_1();
    var funcionarioEstagiario = new Estagio_1();
    var funcionarioPJ = new ContratoPJ_1();
    console.log("Sou ".concat(funcionarioClt.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioClt)));
    console.log("Sou ".concat(funcionarioEstagiario.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)));
    console.log("Sou ".concat(funcionarioPJ.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioPJ)));
    console.log('----------------------------------');
    console.log("Total de funcion\u00E1rios: ".concat([funcionarioClt, funcionarioEstagiario, funcionarioPJ].length));
}
