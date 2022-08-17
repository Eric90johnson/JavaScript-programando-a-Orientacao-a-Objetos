import {
    Cliente
} from "./Cliente.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;    
    constructor(cliente, agencia) {   
        super(0, cliente, agencia);     
        ContaCorrente.numeroDeContas += 1;
    }
}

// #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields