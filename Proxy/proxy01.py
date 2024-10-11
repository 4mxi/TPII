# Objeto Real
class ServicoReal:
    def executar(self):
        print("Objeto Real - Executando o Serviço Real")

# Proxy (Procurador)
class ProxyServicoReal:
    def __init__(self):
        self.servicoReal = ServicoReal();

    def executar(self):
        print("Proxy - Antes da Execução do Serviço")
        self.servicoReal.executar()
        print("Proxy - Depois da Execução do Serviço")

# Uso do Proxy:
proxy = ProxyServicoReal()
proxy.executar()