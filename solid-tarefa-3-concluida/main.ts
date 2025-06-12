
interface Funcionario {
    nome: string;
    cargaHoraria: number;
}
interface FuncionarioEfetivo extends Funcionario {
    salario : number;
    calculaSalario(): number;
    calculaParticipacaoDeLucros(lucro: number): number;
}
    interface FuncionarioVoluntario extends Funcionario {
    escreveRelatorio(): void;
}
 interface FuncionarioPesquisador extends Funcionario {
    escreveRelatorio(): void;
}

class FuncionarioEfetivo implements Funcionario {
    constructor(nome: string, cargaHoraria: number, salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class FuncionarioVoluntario implements Funcionario {
    orientador: Funcionario;

    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: Funcionario) {
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
        this.orientador = funciarioEfetivo;
    }

    escreveRelatorio(){
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }

}
class FuncionarioPesquisador implements Funcionario {
    orientador: Funcionario;

    constructor(nome: string, cargaHorariaExtensao: number, funciarioEfetivo: Funcionario) {
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
        this.orientador = funciarioEfetivo;
    }

    escreveRelatorio(){
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    pesquiso(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }

}


const funcionarioEfetivo: FuncionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const funcionarioVoluntario: FuncionarioVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);
const funcionarioPesquisador: FuncionarioPesquisador = new FuncionarioPesquisador("Maria", 30, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
funcionarioVoluntario.trabalha();
funcionarioVoluntario.escreveRelatorio(); 

//Pesquisador
console.log("nome:", funcionarioPesquisador.nome);
funcionarioPesquisador.pesquiso();
funcionarioPesquisador.escreveRelatorio();