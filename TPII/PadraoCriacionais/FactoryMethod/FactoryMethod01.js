//Classe base Veiculo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`)
    }
}

//Subclasses de Veiculos
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

//Fabrica Abstrata de veiculos
class FabricaDeVeiculos{
    criarVeiculo(modelo){
        throw new Error('O modelo criarVeiculo deve ser implementado pelas subclasses')
    }
}

//Fabrica Concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

//Fabrica Concreta de Motos
class FabricaDeMotos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}


//USO DO FATORYMETHOD-----------------------------------------------------------
const fabricaDeCarros = new FabricaDeCarros();
const carro = fabricaDeCarros.criarVeiculo('Sedan');
carro.mostrarDetalhes(); // Saida-> modelo: Sedan

const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo('Esportiva');
moto.mostrarDetalhes(); // Saida-> modelo: Esportiva

