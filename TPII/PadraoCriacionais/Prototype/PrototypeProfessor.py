import copy

# Classe Pessoa a ser clonada:
class Pessoa:
    def __init__(self, id, nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade
    
    # Metodos clone para realizar uma copia do objeto:
    def clone(self):
        return copy.copy(self)
    
# Classe GerenciaPessoa para gerenciar instâncias de Pessoas:
class GerenciaPessoa:
    def __init__(self):
        self.pessoas = {}

    # Adicionar uma nova pessoas no dicionario de Pessoa:
    def adicionarPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas[id] = pessoa
    
    # Solicita uma pessoa pelo id e retorna uma copia dela:
    def getPessoaById(self, id):
        pessoaOriginal = self.pessoas.get(id)
        if pessoaOriginal:
            return pessoaOriginal.clone()
        else:
            return None

# Criando uma instãncia de GerenciaPessoa:
gerencia = GerenciaPessoa()

# Adicionando pessoas:
gerencia.adicionarPessoa(1, "João da Silva", 20)
gerencia.adicionarPessoa(2, "Maria da Silva", 35)
gerencia.adicionarPessoa(3, "Paulo Oliveira", 50)

# Clonando peossas e modificando informações:
pessoaClone1 = gerencia.getPessoaById(1)
if pessoaClone1:
    pessoaClone1.nome = "Ricardo de Oliveira"

# Exibindo pessoas:
print("------ PESSOA ORIGINAL ----------")
print(gerencia.getPessoaById(1).__dict__)
print(gerencia.getPessoaById(2).__dict__)
print(gerencia.getPessoaById(3).__dict__)

print("------ PESSOA CLONADA ----------")
print(pessoaClone1.__dict__)

