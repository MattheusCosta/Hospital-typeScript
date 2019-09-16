///<reference path="paciente.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="medico.ts" />
///<reference path="prontosocorro.ts" />

namespace hospital{
    export class Hospital {
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];
        private _prontoSocorro:Array<ProntoSocorro> = [];

        public getNome(){
            return this._nome;
        }
        public setNome(nome:string){
            this._nome = nome;
        }

        public getEnfermeiros(){
            return this._enfermeiros;
        }
        public addEnfermeiros(enfermeiro:Enfermeiro){
            this._enfermeiros.push(enfermeiro);
        }

        public getMedicos(){
            return this._medicos;
        }
        public addMedicos(medico:Medico){
            this._medicos.push(medico);
        }

        public getPacientes(){
            return this._pacientes;
        }
        public addPacientes(pacientes:Paciente){
            this._pacientes.push(pacientes);
        }

        public get(){
            return this._medicos;
        }
        public add(medico:Medico){
            this._medicos.push(medico);
        }
    }
}