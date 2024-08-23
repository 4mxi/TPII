//Classe Pessoa - Usada como referencia para ser clonada
class Pessoa{
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
//metodo clone para realizar a copia do objeto
    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

// Classe gerenciamento pessoa par gerenciar instancias de pessoas;
class GerenciamentoPessoas{
    constructor(){
        this.pessoas = {};
    }

    //Adiciona uma nova pessoa ao dicionario de pessoas
    adicionarPessoas(id, nome, idade){
        const pessoas = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoas;
    }

    //Solicita uma pessoa pelo id e retorna uma copia dela:
    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal) {
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }

}

//Criando uma Instancia de Gerenciamento de Pessoas
const gerencia = new GerenciamentoPessoas();

//Adicionando Pessoas
gerencia.adicionarPessoas(1, 'João da Silva', 26);
gerencia.adicionarPessoas(2, 'Maria da Silva', 30);
gerencia.adicionarPessoas(3, 'Paulo Oliveira', 40);

//Clonando pessoas e modificando informações
const pessoaClone1 = gerencia.getPessoaById(1);
if(pessoaClone1){
    pessoaClone1.nome = 'Ricardo de Oliveira';
}

//Exibindo Pessoas
console.log(` -------- Pessoa Original --------`)
console.log(gerencia.getPessoaById(1));
console.log(gerencia.getPessoaById(2));
console.log(gerencia.getPessoaById(3));

console.log(' ------- Pessoa Clonada ---------')
console.log(pessoaClone1);
