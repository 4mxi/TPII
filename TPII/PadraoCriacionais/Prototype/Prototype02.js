//Classe Pizza que representa um tipo de Pizza
class Pizza{
    constructor(sabor, preco){
        this.sabor = sabor;
        this.preco = preco;
    }

    //Metodo clone para Realizar uma copia Superficial do Objeto:
    clone(){
        return new Pizza(this.sabor, this.preco);
    }
}

//Classe PedidoPizza representa um pedido de Pizza:
class PedidoPizza{
    constructor(cliente, pizzas){
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calculaTotal(){
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
}

//Classe Pizzaria representa uma Pizzaria:
class Pizzaria{
    constructor(nome){
        this.nome = nome;
        this.cardapio = {};
    }

    adicionarPizza(sabor, tamanho, borda, ingredienteExtra, preco){
        this.cardapio[sabor, tamanho, borda, ingredienteExtra] = new Pizza(sabor, tamanho, borda, ingredienteExtra, preco);
    }

    fazerPedido(cliente, sabores){
        const pizzas = [];
        sabores.forEach(sabor => {
            if(this.cardapio.hasOwnProperty(sabor)){
                pizzas.push(this.cardapio[sabor].clone());
            }else{
                console.log(`Desculpe, ${this.nome} não oferece a pizza de ${sabor}`);

            }
        })

        if(pizzas.length > 0){
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`Pedido Recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} - R$ ${pizza.preco.toFixed(2)}`);
            })
            console.log(`Total: R$ ${pedido.calculaTotal().toFixed(2)}`);
        }
    }
}

//Exemplo de Uso -------------------------
const minhaPizzaria = new Pizzaria("Minha Pizzaria");

minhaPizzaria.adicionarPizza("Mussarela", 30);
minhaPizzaria.adicionarPizza("Calabresa", 35);
minhaPizzaria.adicionarPizza("Lombo", 40);

minhaPizzaria.fazerPedido("João", ["Mussarela", "Lombo"]);