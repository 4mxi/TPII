class Tamanho {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Borda {
    constructor(saborBorda) {
        this.saborBorda = saborBorda;
    }
}

class Sabores {
    constructor(sabor) {
        this.sabor = sabor;
    }
}

class IngredienteExtra {
    constructor(extra) {
        this.extra = extra;
    }
}

// BUILDER
class PizzaBuilder {
    constructor() {
        this.tamanho = null;
        this.borda = null;
        this.sabores = null;
        this.ingredienteExtra = null;
    }

    addTamanho(tipo) {
        switch (tipo) {
            case 'Broto - 20cm':
            case 'Padrão - 30cm':
            case 'Grande - 35cm':
            case 'Família - 40cm':
                this.tamanho = new Tamanho(tipo);
                break;
            default:
                console.log('Tamanho inválido');
                break;
        }
        return this;
    }

    addBorda(saborBorda) {
        switch (saborBorda) {
            case 'Tradicional':
            case 'Sem Borda':
            case 'Catupiry':
            case 'Cheddar':
                this.borda = new Borda(saborBorda);
                break;
            default:
                console.log('Borda inválida');
                break;
        }
        return this;
    }

    addSabores(sabor) {
        switch (sabor) {
            case 'Mussarela':
            case 'Calabresa':
            case 'Pepperoni':
            case 'Frango com Catupiry':
            case 'Quatro Queijos':
                this.sabores = new Sabores(sabor);
                break;
            default:
                console.log('Sabor inválido');
                break;
        }
        return this;
    }

    addIngredienteExtra(extra) {
        switch (extra) {
            case 'Bacon':
            case 'Champignon':
            case 'Cebola':
            case 'Milho':
            case 'Ovo':
                this.ingredienteExtra = new IngredienteExtra(extra);
                break;
            default:
                console.log('Ingrediente extra inválido');
                break;
        }
        return this;
    }

    construir() {
        if (!this.tamanho || !this.borda || !this.sabores || !this.ingredienteExtra) {
            console.log('Não foi possível construir a pizza. Verifique se todos os componentes foram adicionados corretamente.');
            return null;
        }else{
        return new Pizza(this.tamanho, this.borda, this.sabores, this.ingredienteExtra);
        }
    }
}

// Construindo Pizza

class Pizza {
    constructor(tamanho, borda, sabores, ingredienteExtra) {
        this.tamanho = tamanho;
        this.borda = borda;
        this.sabores = sabores;
        this.ingredienteExtra = ingredienteExtra;
    }

    mostrarDetalhes() {
        console.log(`DETALHES DA PIZZA:
        Tamanho: ${this.tamanho.tipo}
        Borda: ${this.borda.saborBorda}
        Sabores: ${this.sabores.sabor}
        Ingrediente Extra: ${this.ingredienteExtra.extra}`);
    }
}

// Interface de utilização - usando builder para construir a pizza

const builder = new PizzaBuilder();

const pizza1 = builder
    .addTamanho('Grande - 35cm')
    .addBorda('Catupiry')
    .addSabores('Pepperoni')
    .addIngredienteExtra('Bacon')
    .construir();

pizza1.mostrarDetalhes();

