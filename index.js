class Cliente {
    nome;
    cpf;    
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            (this._saldo -= valor);
        }
    }

    depositar(valor){
        if(valor >0 ) {
            this._saldo += valor;
            console.log(this._saldo);
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0; //todo campo que tiver um _ (underline) siginifica que é um campo privado
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

