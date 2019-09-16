///<reference path="paciente.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="medico.ts" />
///<reference path="prontosocorro.ts" />
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
            this._prontoSocorro = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addEnfermeiros = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype.addPacientes = function (pacientes) {
            this._pacientes.push(pacientes);
        };
        Hospital.prototype.getProntoSocorro = function () {
            return this._prontoSocorro;
        };
        Hospital.prototype.addProntoSocorro = function (prontoSocorro) {
            this._prontoSocorro.push(prontoSocorro);
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
