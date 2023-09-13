// Exercício 1

class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    sacar(saque){
        this.saldo -= saque;
    }

    depositar(deposito){
        this.saldo += deposito;
    }
}

let conta = new ContaBancaria(1000);
conta.depositar(1000);
console.log(conta.saldo);

conta.sacar(500);
console.log(conta.saldo);