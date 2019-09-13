///<reference path="funcionario.ts" />
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
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        return Medico;
    }(hospital.Funcionario));
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
