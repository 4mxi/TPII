// Definindo A PIZZA
class Tamanho{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Borda{
    constructor(saborBorda){
        this.saborBorda = saborBorda;
    }
}

class Sabores{
    constructor(sabor){
        this.sabor = sabor;
    }
}

class IngredienteExtra{
    constructor(extra){
        this.extra = extra;
    }
}

// BUILDER
class PizzaBuilder{
    constructor(){
        this.tamanho = null;
        this.borda = null;
        this.sabores = null;
        this.ingredienteExtra = null;
    }

    addTamanho(tipo){
        this.tamanho = new Tamanho(tipo);
        return this
    }

    addBorda(saborBorda){
        this.borda = new Borda(saborBorda);
        return this
    }

    addSabores(sabor){
        this.sabores = new Sabores(sabor);
        return this
    }

    addIngredienteExtra(extra){
        this.ingredienteExtra = new IngredienteExtra(extra);
        return this
    }
    construir(){
        return new Pizza(this.tamanho, this.borda, this.sabores, this.ingredienteExtra);
    }
}

// Construindo Pizza

class Pizza{
    constructor(tamanho, borda, sabores, ingredienteExtra){
        this.tamanho = tamanho;
        this.borda = borda;
        this.sabores = sabores;
        this.ingredienteExtra = ingredienteExtra;
    }

    mostrarDetalhes(){
        console.log(`DETALHES DA PIZZA:
        Tamanho:${this.tamanho.tipo}
        Borda:${this.borda.saborBorda}
        Sabores:${this.sabores.sabor}
        Ingrediente Extra:${this.ingredienteExtra.extra}`)
    }
}

// Interface de utilização - usando builder para construir a pizza

const builder = new PizzaBuilder();

const pizza1 = builder
    .addTamanho('Grande')
    .addBorda('catupiry')
    .addSabores('tradicional')
    .addIngredienteExtra('azeitona')
    .contruir()

pizza1.mostrarDetalhes();
