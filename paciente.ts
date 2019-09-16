///<reference path="pessoa.ts" />
///<reference path="isetor.ts" />

namespace hospital{
    export class Paciente extends Pessoa implements ISetor{
        private _codPaciente:number;
        private _setor:string;

        public getCodPaciente(){
            return this._codPaciente;
        }
        public setCodPaciente(codigo:number){
            this._codPaciente = codigo;
        }
        public setSetor(setor:string){
            this._setor = setor;
        }
        public mostrarSetor(){
            return this._setor;
        }
    }
}