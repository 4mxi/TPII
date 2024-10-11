// Objeto Real
class ServicoReal{
    executar(){
        console.log("Objeto Real - Executando o serviço real.");
    }
}

// Proxy (Procurador)
class ProxyServicoReal{
    constructor(){
        this.servicoReal = new ServicoReal();
    }

    executar(){
        console.log("Proxy - Antes da Execução do Serviço");
        this.servicoReal.executar();
        console.log("Proxy - Depois da Execução do Serviço");
    }
};

// Uso do Proxy:
const proxy = new ProxyServicoReal();
proxy.executar();