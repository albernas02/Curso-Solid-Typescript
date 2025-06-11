import Colaborador from './Colaborador';
import CalcularSalario from './CalcularSalario';

export default class Pagamento {
    constructor(private servicoCalcularSalario: CalcularSalario) {}

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalcularSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}