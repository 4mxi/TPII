#Classe base de Veiculo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

#Subclasses de Veiculo

class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Barco(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

#Fabrica Abstrata de Veiculos
class FabricaDeVeiculos:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("O modelo criarVeiculo deve ser implementado pela subclasse")

#Fabrica Concreta de Carros
class FabricaDeCarros(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Carro(modelo)
    
#Fabrica Concreta de Motos
class FabricaDeMotos(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

#Fabrica Concreta de Barcos
class FabricaDeBarcos(FabricaDeVeiculos):
    def criarVeiculo(self, modelo):
        return Barco(modelo)

#USO DO FATORYMETHOD-------------------------------------------------------
fabricaDeCarros = FabricaDeCarros()
carro1 = fabricaDeCarros.criarVeiculo('Sedan')
carro2 = fabricaDeCarros.criarVeiculo('Fusca 68')
carro1.mostrarDetalhes()
carro2.mostrarDetalhes()

fabricaDeMotos = FabricaDeMotos()
moto1 = fabricaDeMotos.criarVeiculo('Esportiva')
moto1.mostrarDetalhes()

fabricaDeBarcos = FabricaDeBarcos()
barco1 = fabricaDeBarcos.criarVeiculo('Lancha')
barco1.mostrarDetalhes()