//Classe Pizza que representa um tipo de Pizza
class Pizza {
    constructor(sabor, preco, tamanho, borda, ingredienteExtra) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.borda = borda;
        this.ingredienteExtra = ingredienteExtra;
        this.preco = preco;
    }

    //Metodo clone para Realizar uma copia Superficial do Objeto:
    clone() {
        return new Pizza(this.sabor, this.tamanho, this.borda, this.ingredienteExtra, this.preco);
    }
}

//Classe PedidoPizza representa um pedido de Pizza:
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

//Classe Pizzaria representa uma Pizzaria:
class Pizzaria {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    }

    adicionarPizza(sabor, tamanho, borda, ingredienteExtra, preco) {
        this.cardapio[sabor] = new Pizza(sabor, tamanho, borda, ingredienteExtra, preco);
    }

    fazerPedido(cliente, sabores, tamanhoPizza, saborBorda, extra) {
        const pizzas = [];
        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de ${sabor}`);

            }
        })

        tamanhoPizza.forEach(tamanho => {
            if (this.cardapio.hasOwnProperty(tamanho)) {
                pizzas.push(this.cardapio[tamanho].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece o tamanho ${tamanho}`)
            }
        })

        saborBorda.forEach(borda => {
            if (this.cardapio.hasOwnProperty(borda)) {
                pizzas.push(this.cardapio[borda].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a borda ${borda}`)
            }
        })

        extra.forEach(ingredienteExtra => {
            if (this.cardapio.hasOwnProperty(ingredienteExtra)) {
                pizzas.push(this.cardapio[ingredienteExtra].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece o Ingrediente extra ${ingredienteExtra}`)
            }
        })

        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`Pedido Recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`Sabor: ${pizza.sabor} ,Tamanho: ${pizza.tamanho} ,Borda: ${pizza.borda} ,Extra:${pizza.ingredienteExtra} - R$ ${pizza.preco.toFixed(2)}`);
            })
            console.log(`Total: R$ ${pedido.calculaTotal().toFixed(2)}`);
        }
    }
}

//Exemplo de Uso -------------------------
const minhaPizzaria = new Pizzaria("Minha Pizzaria");
minhaPizzaria.adicionarPizza("Mussarela", "Brotinho", "Catupiry", "Azeitona", 30);
minhaPizzaria.adicionarPizza("Calabresa", "Padrao", "cheddar", "milho", 40);

minhaPizzaria.fazerPedido("Felipe", ["Mussarela", "Calabresa"], ["Brotinho", "Padrao"], ["Catupiry", "cheddar"], ["Azeitona", "milho"]);


