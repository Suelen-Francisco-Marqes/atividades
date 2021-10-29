"use strict";
exports.__esModule = true;
//"Controller"
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.pessoa = {};
    }
    Pessoa.prototype.getNome = function () {
        console.log(this.pessoa);
    };
    return Pessoa;
}());
var teste = new Pessoa();
teste.pessoa.nome = "Suelen";
teste.getNome();
