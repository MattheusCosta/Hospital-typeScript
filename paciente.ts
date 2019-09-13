///<reference path="pessoa.ts" />

namespace hospital{
    export class Paciente extends Pessoa{
        private _codPaciente:number;

        public getCodPaciente(){
            return this._codPaciente;
        }
        public setCodPaciente(codigo:number){
            this._codPaciente = codigo;
        }
    }
}