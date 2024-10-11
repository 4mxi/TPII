// Objeto Real - Classe Produto:
class Produto{
    constructor(nome, preco, codEAN){
        this.nome = nome;
        this.preco = preco;
        this.codEAN = codEAN;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome}
            Preço: R$ ${this.preco.toFixed(2)}
            Codigo EAN: ${this.codEAN}`)
    }
}

// Proxy - ProxyProduto
class ProxyProduto{
    itens = [];
    
    constructor(...produto){
        this.itens = produto;

    }


    exibirDetalhes(){
        console.log("Autenticando no Sistema...");
        this.linhas();
        console.log("Autenticação realizada com sucesso...")

        for( let i=0 ; this.itens.length>i; i++){
            this.itens[i].exibirDetalhes();
            }
        this.linhas();
        }
        

    linhas(){
        console.log("-------------------------------------")
    }

        
}

// Uso do Proxy:
const produtoReal1 = new Produto("Camiseta", 39.90, "7895000876542");
const produtoReal2 = new Produto("Bone", 49.90, "7896765332198");
const produtoReal3 = new Produto("Sapato", 69.90, "7896765332129");
const proxyProduto1 = new ProxyProduto(produtoReal1, produtoReal2, produtoReal3);




proxyProduto1.exibirDetalhes();

