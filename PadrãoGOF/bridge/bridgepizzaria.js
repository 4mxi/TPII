// IMPLEMENTAÇÃO DAS TAMANHO ---------------------------------------:
// Interface das TAMANHO
class Tamanho{
    constructor(tamanho){
        this.tamanho = tamanho;
    }

    getTamanho(){
        return this.tamanho;
    }
}

// Concreta dos Tamanhos:
class TamanhoBrotinho extends Tamanho{
    constructor(){
        super("brotinho");
    }
}

class TamanhoTradicional extends Tamanho{
    constructor(){
        super("tradicional");
    }
}

class TamanhoGrande extends Tamanho{
    constructor(){
        super("grande");
    }
}

// IMPLEMENTAÇÃO DAS SABORES ---------------------------------------:
// Interface de SABORES:
class Sabor{
    constructor(tamanho){
        this.tamanho = tamanho;
    }

    setTamanho(tamanho){
        this.tamanho = tamanho;
    }

    producaoPizza(){
        throw new Error("Este método precisa ser implementado pela subclasse");
    }
}

// Abstração refinada:
class Mussarela extends Sabor{
    producaoPizza(){
        console.log(`Produzindo Pizza de Mussarela ${this.tamanho.getTamanho()}.`);
    }
}

class Calabresa extends Sabor{
    producaoPizza(){
        console.log(`Produzindo Pizza de Calabresa ${this.tamanho.getTamanho()}.`);
    }
}

class Pepperoni extends Sabor{
    producaoPizza(){
        console.log(`Produzindo Pizza de Pepperoni ${this.tamanho.getTamanho()}.`);
    }
}

// Cliente--------------------------------------------------------:
const tamanhoBrotinho = new TamanhoBrotinho();
const tamanhoTradicional = new TamanhoTradicional();
const tamanhoGrande = new TamanhoGrande();

const pizza1 = new Mussarela(tamanhoGrande);
const pizza2 = new Calabresa(tamanhoBrotinho);
const pizza3 = new Pepperoni(tamanhoTradicional);

pizza1.producaoPizza();
pizza2.producaoPizza();
pizza3.producaoPizza();


