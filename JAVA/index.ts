//"model"
export interface IPessoa {
    nome: string;
    idade: number;
    nascimento: Date;
    listaExemplo: string[];
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

}

const teste = new Pessoa();
teste.pessoa.nome = "Suelen";

teste.getNome();


