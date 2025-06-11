import Recepcionista from "./Recepcionista";
import ChefConfeitaria from "./ChefConfeitaria";
import ChefCozinha from "./ChefCozinha";
import Garcom from "./Garcom";
import AuxiliarLimpeza from "./AuxiliarLimpeza";
import Cumim from "./Cumim";

const recepcionista = new Recepcionista("Ana", "Organização das mesas.");
const chefConfeitaria = new ChefConfeitaria("Carlos", "Preparação de sobremesas.");
const chefCozinha = new ChefCozinha("Fernanda", "Preparação de pratos principais.");
const garcom = new Garcom("João", "Anotando os pedidos.");
const auxiliarLimpeza = new AuxiliarLimpeza("Luiza", "Limpeza do salão.");
const cumim = new Cumim("Pedro", "Servir bebidas.");

console.log(`Recepcionista: ${recepcionista.nome}, Tarefa: ${recepcionista.tarefa}`);
console.log(`Chef de Confeitaria: ${chefConfeitaria.nome}, Tarefa: ${chefConfeitaria.tarefa}`);
console.log(`Chef de Cozinha: ${chefCozinha.nome}, Tarefa: ${chefCozinha.tarefa}`);
console.log(`Garçom: ${garcom.nome}, Tarefa: ${garcom.tarefa}`);
console.log(`Auxiliar de Limpeza: ${auxiliarLimpeza.nome}, Tarefa: ${auxiliarLimpeza.tarefa}`);
console.log(`Cumim: ${cumim.nome}, Tarefa: ${cumim.tarefa}`);
// Exemplo de uso das classes