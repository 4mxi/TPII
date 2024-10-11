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
    constructor(produto, listaProdutos){
        this.produto = produto;
        this.listaProdutos = listaProdutos;

    }

    exibirDetalhes(){
        console.log("Autenticando no Sistema...");
        this.autenticar();
        console.log("Autenticação realizada com sucesso...")
        
        this.produto.exibirDetalhes();
        
        console.log("Registrando no sistema..")
            // Funcionalidade 2 - Registrando em um Sistema 2
        console.log("Operação Concluida...")
    }

    autenticar(){
        console.log(">> Autenticando Usuario");
        console.log(">> Consultando dados..");
        console.log(">> Autenticação OK.")
    }
}

// Uso do Proxy:
const produtoReal1 = new Produto("Camiseta", 39.90, "7895000876542");
const produtoReal2 = new Produto("Bone", 49.90, "7896765332198");
const produtoReal3 = new Produto("Sapato", 69.90, "7896765332129");
const proxyProduto1 = new ProxyProduto(produtoReal1);
const proxyProduto2 = new ProxyProduto(produtoReal2);
const proxyProduto3 = new ProxyProduto(produtoReal3);



proxyProduto1.exibirDetalhes();
proxyProduto2.exibirDetalhes();
