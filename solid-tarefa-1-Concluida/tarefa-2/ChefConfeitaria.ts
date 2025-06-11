export default class ChefConfeitaria {
    private name: string;
    private task: string;

    constructor(name: string, task: string) {
        this.name = name;
        this.task = task;
    }
    get nome() {
        return this.name;
    }
    set nome(name: string) {
        this.name = name;
    }
    get tarefa() {
        return this.task;
    }
    set tarefa(task: string) {
        this.task = task;
    }
}