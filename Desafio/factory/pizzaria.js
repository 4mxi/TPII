// Classe Pizza que representa um tipo de Pizza
class Pizza {
    constructor(sabor, tamanho, borda, ingredienteExtra, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.borda = borda;
        this.ingredienteExtra = ingredienteExtra;
        this.preco = preco;
    }

    // Método clone para realizar uma cópia superficial do objeto
    clone() {
        return new Pizza(this.sabor, this.tamanho, this.borda, this.ingredienteExtra, this.preco);
    }
}

// Classe PedidoPizza representa um pedido de Pizza
class PedidoPizza {
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calculaTotal() {
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
}

// Classe Pizzaria representa uma Pizzaria
class Pizzaria {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    }

    adicionarPizza(sabor, tamanho, borda, ingredienteExtra) {
        let preco = 0;
        
        // Define o preço baseado no tamanho
        switch (tamanho) {
            case "Broto - 20cm":
                preco = 20;
                break;
            case "Padrão - 30cm":
                preco = 30;
                break;
            case "Grande - 35cm":
                preco = 40;
                break;
            case "Família - 40cm":
                preco = 50;
                break;
            default:
                console.log(`Tamanho ${tamanho} não encontrado`);
                return;
        }

        // Adiciona custo baseado na borda
        switch (borda) {
            case "Tradicional":
            case "Sem Borda":
            case "Catupiry":
            case "Cheddar":
                break;
            default:
                console.log(`Borda ${borda} não encontrada`);
                return;
        }

        // Adiciona custo baseado nos ingredientes extras
        switch (ingredienteExtra) {
            case "Bacon":
            case "Champignon":
            case "Cebola":
            case "Milho":
            case "Ovo":
                break;
            default:
                console.log(`Ingrediente extra ${ingredienteExtra} não encontrado`);
                return;
        }

        // Adiciona a pizza ao cardápio
        this.cardapio[sabor] = new Pizza(sabor, tamanho, borda, ingredienteExtra, preco);
    }

    fazerPedido(cliente, sabores) {
        const pizzas = [];
        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de ${sabor}`);
            }
        });

        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`Pedido Recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} - R$ ${pizza.preco.toFixed(2)}`);
                console.log(`Borda: ${pizza.borda}`);
                console.log(`Ingrediente Extra: ${pizza.ingredienteExtra}`);
            });
            console.log(`Total: R$ ${pedido.calculaTotal().toFixed(2)}`);
        }
    }
}

// Exemplo de Uso -------------------------
const minhaPizzaria = new Pizzaria("Minha Pizzaria");

minhaPizzaria.adicionarPizza("Mussarela", "Padrão - 30cm", "Tradicional", "Bacon");
minhaPizzaria.adicionarPizza("Calabresa", "Grande - 35cm", "Catupiry", "Cebola");
minhaPizzaria.adicionarPizza("Quatro Queijos", "Família - 40cm", "Cheddar", "Milho");

minhaPizzaria.fazerPedido("João", ["Mussarela", "Calabresa"]);
