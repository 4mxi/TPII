//Objeto Real
class ServicoReal{
    public void executar(){
        System.out.println(x:"Objeto Real - Executando o Serviço Real");
    }
}

//Proxy(Procurador)
class ProxyServicoReal{
    private ServicoReal servicoReal;

    public ProxyServico(){
        this.servicoReal = new ServicoReal();
    }

    public void executar(){
        System.out.println(x:"Proxy - Antes da Execução do Serviço");
        servicoReal.executar();
        System.out.println(x:"Proxy - Depois da Execução do Serviço");

    }
    
}


//Uso do Proxy
public class Proxy01{
    public static void main(String [] args){
        ProxyServicoReal proxy = new ProxyServicoReal();
        proxy.executar();
    }

}