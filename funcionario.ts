///<reference path="pessoa.ts" />

namespace hospital{
    export abstract class Funcionario extends Pessoa{
        private _codFuncionario:number;

        public getCodFuncionario(){
            return this._codFuncionario;
        }
        public setCodFuncionario(codigo:number){
            this._codFuncionario = codigo;
        }
    }
}