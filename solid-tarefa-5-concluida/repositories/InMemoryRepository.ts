import Cliente from "../entities/Clients";
import IClientsRepository from "../interfaces/IClientsRepository";

export default class InMemoryRepository implements IClientsRepository {
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionaCliente(cliente: Cliente) {
        this.db.push(cliente);
    }
    listaClientes() {
        return this.db;
    }
}