import Cliente from "../entities/Clients";
import IClientsRepository from "../interfaces/IClientsRepository";
import InMemoryRepository from "../repositories/InMemoryRepository";

export default class ClienteController {
    constructor(private repository: IClientsRepository) {}
    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}
