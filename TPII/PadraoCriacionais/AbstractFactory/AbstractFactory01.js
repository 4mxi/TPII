//Interface da Fabrica Abstrata:
class FabricaAbstrata{
    criaProdutoA(){}
    criaProdutoB(){}
    criaProdutoC(){}
}

// Fabrica Concreta que Cria produtos do Tipo A, B e C:
class FabricaConcreta1 extends FabricaAbstrata{
    criaProdutoA(){
        return new ProdutoConcretoA1();
    }
    criaProdutoB(){
        return new ProdutoConcretoB2();
    }
    criaProdutoC(){
        return new ProdutoConcretoC3();
    }

}

class FabricaConcreta2 extends FabricaAbstrata{
    criaProdutoA(){
        return new ProdutoConcretoA2();
    }

    criaProdutoB(){
        return new ProdutoConcretoB2();
    }

    criaProdutoC(){
        return new ProdutoConcretoC2();
    }
}

//Interface dos Produtos do Tipo A:
class ProdutoAbstratoA{
    metodoA(){}
}

//Implementação Concreta do Produto do Tipo A:
class ProdutoConcretoA1 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do Tipo A da Fabrica 1";
    }
}

// Implementação Concreta do Produto do Tipo A - Fabrica 2:
class ProdutoConcretoA2 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do Tipo A da Fabrica 2";
    }
}

// Interface dos Produtos do Tipo B------------
class ProdutoAbstratoB{
    metodoB(){}
}

//Implementação Concreta do Produto
class ProdutoConcretoB1 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do Tipo B da Fabrica 1";
    }
}

//Implementação Concreta do Produto do Tipo B - Fabrica 2:
class ProdutoConcretoB2 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do Tipo B da Fabrica 2";
    }
}

//Interface dos Produtos do Tipo C---------------
class ProdutoAbstratoC{
    metodoC(){}
}

//Implementação Concreta do Produto do Tipo C - Fabrica 1:
class ProdutoConcretoC1{
    metodoC(){
        return "Produto do Tipo C da Fabrica 1";
    }
}

//Implementação Concreta do Produto do Tipo C - Fabrica 2:
class ProdutoConcretoC2{
    metodoC(){
        return "Produto do Tipo C da Fabrica 2";
    }
}

//Implementação Concreta do Produto do Tipo C - Fabrica 3:
class ProdutoConcretoC3{
    metodoC(){
        return "Produto do Tipo C da Fabrica 3";
    }
}

//Função para Demonstrar o Padrão Abstract Factory:

function codigoCliente(factory){
    const produtoA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();
    const produtoC = factory.criaProdutoC();

    console.log(produtoA.metodoA());
    console.log(produtoB.metodoB());
    console.log(produtoC.metodoC());
}

// Exemplo de Uso da 1ª Fabrica:
const factory1 = new FabricaConcreta1();
codigoCliente(factory1);

// Exemplo de Uso da 2ª Fabrica:
const factory2 = new FabricaConcreta2();
codigoCliente(factory2);