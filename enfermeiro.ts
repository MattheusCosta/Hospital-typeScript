///<reference path="funcionario.ts" />
///<reference path="isetor.ts" />

namespace hospital{
    export class Enfermeiro extends Funcionario implements ISetor{
        private _coren:number;
        private _setor:string;

        public getCoren(){
            return this._coren;
        }
        public setCoren(coren:number){
            this._coren = coren;
        }
        public setSetor(setor:string){
            this._setor = setor;
        }
        public mostrarSetor(){
            return this._setor;
        }
    }
}