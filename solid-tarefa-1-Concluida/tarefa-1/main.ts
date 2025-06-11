import Colaborador from "./Colaborador";
import QuadrodeColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";
import GeraRelatorio from "./GeraRelatorio";
import CalcularSalario from "./CalcularSalario";
import Pagamento from "./Pagamento";

const quadrodeColaboradores = new QuadrodeColaboradores();
const calcularSalario = new CalcularSalario();
const geraRelatorio = new GeraRelatorio(quadrodeColaboradores.colaboradores, calcularSalario);
const pagamento = new Pagamento(calcularSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadrodeColaboradores.contratarColaborador(colaborador1);
quadrodeColaboradores.contratarColaborador(colaborador2);
quadrodeColaboradores.contratarColaborador(colaborador3);

console.log(geraRelatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);