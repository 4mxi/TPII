// Classe Componente:
class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){};

    remover(){};

    obterNome(){};
}

class Folha extends Componente{

    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }

}

class Conteiner extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }

    adicionar(componente){
        this.componentes.push(componente);
    }

    remover(componente){
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;
        this.componentes.forEach(componente =>{
            preco += componente.obterPreco();
        });
        return preco;
    }
}

// Interface do Usuario - Utilização Padrão:

const maca = new Folha('Maçã', 4.50);
const laranja = new Folha('Laranja', 2.90);
const uva = new Folha('Uva', 5.00);
const abacaxi = new Folha('Abacaxi', 5.00);

// A embalagem
const embalagem = new Folha('Embalagem', 4.00);

//Tabela de Frete:
const freteSP = new Folha('SP', 10.00);
const freteRJ = new Folha('RJ', 20.00);
const freteMG = new Folha('MG', 30.00);


const frutas = new Conteiner('Frutas');
frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);
frutas.adicionar(abacaxi);
 
const caixa = new Conteiner('Caixa de Frutas');
caixa.adicionar(frutas);
caixa.adicionar(embalagem);

const frete = new Conteiner('Frete');
frete.adicionar(caixa);
frete.adicionar(freteMG);

console.log(`Preço Frutas: ${frutas.obterPreco()}`);
console.log(`Preço Caixa de Fruta: ${caixa.obterPreco()}`);
console.log(`Preço Total: R$ ${frete.obterPreco()}`);