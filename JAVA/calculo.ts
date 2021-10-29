interface IFuncionario{
    nome: string;
    salarioBruto: number;
    totalHorasExtra: number;
    valorTotalHorasExtra: number;
    salarioINSS: number;
    salarioIR: number;
    salarioLiquido: number;  
}
class Funcionario{
    public funcionario: IFuncionario;
    constructor(){
        this.funcionario = {} as IFuncionario;
    }
    setNome(nome: string){
        this.funcionario.nome = nome;
    }
    setSalarioBruto(salarioBruto: number){
        this.funcionario.salarioBruto = salarioBruto;
    }
    setTotalHorasExtra(totalHorasExtra: number){
        this.funcionario.totalHorasExtra = totalHorasExtra;
    }
    setValorTotalHorasExtra(totalHorasExtra: number){
                                        //salario bruto * total de horas do mes
        this.funcionario.valorTotalHorasExtra = 1470 * totalHorasExtra;             }
    }
    calcularSalarioHoras(salario: number){
        return salario= salarioBruto + valorTotalHorasExtra;
    }
    calculaINSS(SalarioINSS: number){
        if(salarioBruto <= 1100){
            return this.funcionario.SalarioINSS = salarioBruto * 7.5%;    
        }else if((salarioBruto > 1100.01) && (salarioBruto <= 2203.48)){
            return this.funcionario.SalarioINSS = salarioBruto * 9%;  
        }else if((salarioBruto > 2203.49) && (salarioBruto <= 3305.22)){
            return this.funcionario.SalarioINSS = salarioBruto * 12%;    
        }else((salarioBruto > 3305.23) && (salarioBruto <= 6433.57)){
            return this.funcionario.SalarioINSS = salarioBruto * 14%;    
        }  
    }
    calculaIR(salarioIR: number){
        if((salarioBruto <= 1903.99) && (salarioBruto <= 2826.65)){
            return this.funcionario.SalarioIR = salarioBruto * 7.5%;
        }if else((salarioBruto <= 2826,66) && (salarioBruto <= 3751,05)){
            return this.funcionario.SalarioIR = salarioBruto * 15%;
        }if else((salarioBruto <= 3751,06) && (salarioBruto <= 4664,68)){
            return this.funcionario.SalarioIR = salarioBruto * 22,5%;
        }else(salarioBruto >= 4664,69){
            return this.funcionario.SalarioIR = salarioBruto * 27,5%;
        }
    }
    SalarioLiquido(salarioBruto: number, salarioINSS: number, salarioIR: number, valorTotalHorasExtra: number){
       return this.funcionario.salarioLiquido = salarioBruto - salarioINSS - salarioIR + valorTotalHorasExtra;        
    }
function principal(nome: string, salarioBruto: number, horasExtra: number){
    funcionario.setNome(nome);
    funcionario.setSalarioBruto(salarioBruto);
    funcionario.setTotalHorasExtra(horasExtra);
   
    funcionario.calculaSalarioLiquido(salarioBruto,
                                      funcionario.funcionario.salarioINSS,
                                      funcionario.funcionario.salarioIR,
                                      funcionario.funcionario.valorTotalHorasExtra);
    console.log(funcionario);
}
    const funcionario = new Funcionario();
   
    console.log(this.funcionario. nome);
    console.log(this.funcionario. salarioBruto);
    console.log(this.funcionario. salarioLiquido);
    console.log(this.funcionario. totalHorasExtra);