import Colaborador from "./Colaborador";
import quadrodeColaboradores from "./QuadroColaboradores";
import CalcularSalario from "./CalcularSalario";

export default class GeraRelatorio {
  constructor(
    private quadrodeColaboradores: Colaborador[],
    private CalcularSalario: CalcularSalario
  ) {}
  gerarJSON() {
    let relatorio = this.quadrodeColaboradores.map((colaborador) => {
      return {
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        salario: this.CalcularSalario.calcular(colaborador.cargo),
      };
    });
    return JSON.stringify(relatorio);
  }
}
