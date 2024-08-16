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
}


// Construindo Pizza


// Interface de utilização - usando builder para construir a pizza