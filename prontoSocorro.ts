namespace hospital{
    export class ProntoSocorro{
        private _codProntoSocorro:number;
        private _endereco:string;

        public getCodProntoSocorro(){
            return this._codProntoSocorro;
        }

        public setCodProntoSocorro(codigo:number){
            this._codProntoSocorro = codigo;
        }

        public getEndereco(){
            return this._endereco;
        }

        public setEndereco(endereco:string){
            this._endereco = endereco;
        }
    }
}