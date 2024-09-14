// IMPLEMENTAÇÃO DAS CORES ---------------------------------------:
// Interface das cores
class Cor{
    constructor(cor){
        this.cor = cor;
    }

    getCor(){
        return this.cor;
    }
}

// Conreta das cores:
class VermelhoCor extends Cor{
    constructor(){
        super("vermelho");
    }
}

class AzulCor extends Cor{
    constructor(){
        super("azul");
    }
}

class VerdeCor extends Cor{
    constructor(){
        super("verde");
    }
}

// IMPLEMENTAÇÃO DAS FORMAS ---------------------------------------:
// Interface de Formas:
class Forma{
    constructor(cor){
        this.cor = cor;
    }

    setCor(cor){
        this.cor = cor;
    }

    desenho(){
        throw new Error("Este método precisa ser implementado pela subclasse");
    }
}

// Abstração refinada:
class Circulo extends Forma{
    desenho(){
        console.log(`Desenhando um circulo ${this.cor.getCor()}.`);
    }
}

class Quadrado extends Forma{
    desenho(){
        console.log(`Desenhando um quadrado ${this.cor.getCor()}.`);
    }
}

class Triangulo extends Forma{
    desenho(){
        console.log(`Desenhando um triangulo ${this.cor.getCor()}.`);
    }
}

// Cliente--------------------------------------------------------:
const vermelho = new VermelhoCor();
const azul = new AzulCor();
const verde = new VerdeCor();

const estrutura1 = new Circulo(vermelho);
const estrutura2 = new Circulo(verde);
const estrutura3 = new Circulo(azul);
const estrutura4 = new Circulo(vermelho);
const estrutura5 = new Quadrado(verde);
const estrutura6 = new Triangulo(azul);

estrutura1.desenho();
estrutura2.desenho();
estrutura3.desenho();
estrutura4.desenho();
estrutura5.desenho();
estrutura6.desenho();

