//Classe base Veiculo
class Veiculo{
    String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes(){
        System.out.println("Modelo: " + modelo);
    }

}

// Subclasses de Veiculo
class Carro extends Veiculo{

    public Carro(String modelo) {
        super(modelo);
    }

}

class Moto extends Veiculo{

    public Moto(String modelo){
        super(modelo);
    }
}

class Barco extends Veiculo{

    public Barco(String modelo){
        super(modelo);
    }
}

//Fabrica Abstrata de Veiculos
abstract class FabricaDeVeiculos{
    public abstract Veiculo criarVeiculo(String modelo);
}

//Fabrica Concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Veiculo(modelo);
    }
}

//Fabrica Concreta de Motos
class FabricaDeMotos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Veiculo(modelo);
    }
}

//Fabrica Concreta de Barcos
class FabricaDeBarcos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Barco(modelo);
    }
}

//USO DO FACTORYMETHOD------------------------------------------

public class FactoryMethod01{
    public static void main(String[] args){
        FabricaDeVeiculos fabricaDeCarros = new FabricaDeCarros();
        Veiculo carro1 = fabricaDeCarros.criarVeiculo("Sedan");
        Veiculo carro2 = fabricaDeCarros.criarVeiculo("Fusca 68");
        carro1.mostrarDetalhes();
        carro2.mostrarDetalhes();

        FabricaDeVeiculos fabricaDeMotos = new FabricaDeMotos();
        Veiculo moto1 = fabricaDeMotos.criarVeiculo("Esportiva");
        moto1.mostrarDetalhes();

        FabricaDeVeiculos fabricaDeBarcos = new FabricaDeBarcos();
        Veiculo barco1 = fabricaDeBarcos.criarVeiculo("Lancha");
        barco1.mostrarDetalhes();
        
    }
}