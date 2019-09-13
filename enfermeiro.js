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
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        return Enfermeiro;
    }(hospital.Funcionario));
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
