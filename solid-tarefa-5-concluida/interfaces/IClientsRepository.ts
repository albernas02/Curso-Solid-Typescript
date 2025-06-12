import Cliente from "../entities/Clients";

interface IClientsRepository {
    adicionaCliente(cliente: Cliente): void 
    listaClientes(): Cliente[];
}

export default IClientsRepository;