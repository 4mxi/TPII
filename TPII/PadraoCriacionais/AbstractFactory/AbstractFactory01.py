#Interface da Fabrica Abstrat:
class FabricaAbstrata:
    def criaProdutoA(self):
        pass
    def criaProdutoB(self):
        pass
    def criaProdutoC(self):
        pass

# Fabrica Concreta 1 - Cria Produtos do Tipo A, B e C
class FabricaConcreta1(FabricaAbstrata):
    def criaProdutoA(self):
        return ProdutoConcretoA1()
    
    def criaProdutoB(self):
        return ProdutoConcretoB1()
    
    def criaProdutoC(self):
        return ProdutoConcretoC1()
    

#FabricaConcreta 2 - Cria Produtos do tipo A, B e C
class FabricaConcreta2(FabricaAbstrata):
    def criaProdutoA(self):
        return ProdutoConcretoA2()
    
    def criaProdutoB(self):
        return ProdutoConcretoB2()
    
    def criaProdutoC(self):
        return ProdutoConcretoC2()
    
#FabricaConcreta 3 - Cria Produtos do tipo A, B e C

class FabricaConcreta3(FabricaAbstrata):
    def criaProdutoA(self):
        return ProdutoConcretoA3()
    
    def criaProdutoB(self):
        return ProdutoConcretoB3()
    
    def criaProdutoC(self):
        return ProdutoConcretoC3()
    
# Interface dos Produtos do Tipo A ---------------------
class ProdutoAbstratoA:
    def metodoA(self):
        pass
    
# Implementação Concreta do Produto do Tipo A - Fabrica da fabrica 1
class ProdutoConcretoA1(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fabrica 1"

# Implementação Concreta do Produto do Tipo A - Fabrica da fabrica 2
class ProdutoConcretoA2(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fabrica 2"

# Implementação Concreta do Produto do Tipo A - Fabrica da fabrica 3
class ProdutoConcretoA3(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fabrica 3"
    
# Interface dos Produtos do Tipo B ---------------------
class ProdutoAbstratoB:
    def metodoB(self):
        pass
    
# Implementação Concreta do Produto do Tipo B - Fabrica da fabrica 1
class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fabrica 1"

# Implementação Concreta do Produto do Tipo B - Fabrica da fabrica 2
class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fabrica 2"

# Implementação Concreta do Produto do Tipo B - Fabrica da fabrica 3
class ProdutoConcretoB3(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fabrica 3"
    
   
# Interface dos Produtos do Tipo C ---------------------
class ProdutoAbstratoC:
    def metodoC(self):
        pass
    
# Implementação Concreta do Produto do Tipo C - Fabrica da fabrica 1
class ProdutoConcretoC1(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fabrica 1"

# Implementação Concreta do Produto do Tipo C - Fabrica da fabrica 2
class ProdutoConcretoC2(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fabrica 2"

# Implementação Concreta do Produto do Tipo C - Fabrica da fabrica 3
class ProdutoConcretoC3(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fabrica 3"
    
   
# Função para Demonstrar o Padrão Abstract Factory -------------------
def codigoCliente(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()
    produtoC = factory.criaProdutoC()

    print(produtoA.metodoA())
    print(produtoB.metodoB())
    print(produtoC.metodoC())

#Exemplo de Uso da 1 Fabrica
factory1 = FabricaConcreta1()
codigoCliente(factory1)

#Exemplo de Uso da 2 Fabrica
factory2 = FabricaConcreta2()
codigoCliente(factory2)

#Exemplo de Uso da 3 Fabrica
factory3 = FabricaConcreta3()
codigoCliente(factory3)


