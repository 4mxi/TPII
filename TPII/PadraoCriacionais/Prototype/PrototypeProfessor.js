// Classe Pessoa - Usada como referencia para ser clonada:
class Pessoa{
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Método clone para realizar a copia do objeto:
    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

// Classe GerenciamentoPessoa para gerenciar instâncias de Pessoas:
class GerenciamentoPessoa{
    constructor(){
        this.pessoas = {};
    }

    // Adiciona uma nova pessoa ao dicionario de pessoas
    adicionarPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    // Solicita uma pessoa pelo id e retorna uma copia dela:
    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }
}

// Criando uma instância de GerenciamentoPessoa:
const gerencia = new GerenciamentoPessoa();

// Adicionando pessoas:
gerencia.adicionarPessoa(1, "João da Silva", 20);
gerencia.adicionarPessoa(2, "Maria da Silva", 35);
gerencia.adicionarPessoa(3, "Paulo Oliveira", 50);

// Clonando peossas e modificando informações:
const pessoaClone1 = gerencia.getPessoaById(1);
if(pessoaClone1){
    pessoaClone1.nome = "Ricardo de Oliveira";
}

// Exibindo pessoas:
console.log("------ PESSOA ORIGINAL ----------");
console.log(gerencia.getPessoaById(1));
console.log(gerencia.getPessoaById(2));
console.log(gerencia.getPessoaById(3));

console.log("------ PESSOA CLONADA ----------");
console.log(pessoaClone1);

