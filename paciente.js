///<reference path="pessoa.ts" />
///<reference path="isetor.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        Paciente.prototype.setCodPaciente = function (codigo) {
            this._codPaciente = codigo;
        };
        Paciente.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        Paciente.prototype.mostrarSetor = function () {
            return this._setor;
        };
        return Paciente;
    }(hospital.Pessoa));
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
