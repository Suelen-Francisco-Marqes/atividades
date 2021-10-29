//"model"
export interface IPessoa {
    id: number;
    nome: string;
    idade: number;
    endereco?: IEndereco[];
}
export interface IEndereco {
    id: number;
    logradouro: string;
    numero: number;
    complemento: string;
}
//"Controller"
class Pessoa {
    pessoa: IPessoa;
    constructor() {
        this.pessoa = {} as IPessoa;
    }
   
    getNome() {
        console.log(this.pessoa);
    }
    getIdade() {
        console.log(this.pessoa);
    }
}
class endereco {
    endereco: IEndereco;
    constructor() {
        this.endereco = {} as IEndereco;
    }
   
    getlougradouro() {
        console.log(this.endereco);
    }
}
const teste1 = new Pessoa();
teste1.pessoa.nome = "Suelen";
teste1.pessoa.idade = 22;
teste1.getNome();
teste1.getIdade();