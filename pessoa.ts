namespace hospital{
    export abstract class Pessoa{
        private _nome:string;
        private _cpf:string;

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getCpf(){
            return this._cpf;
        }

        public setCpf(cpf:string){
            this._cpf = cpf;
        }

    }
}