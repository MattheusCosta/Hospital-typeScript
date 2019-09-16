var hospital;
(function (hospital) {
    var ProntoSocorro = /** @class */ (function () {
        function ProntoSocorro() {
        }
        ProntoSocorro.prototype.getCodProntoSocorro = function () {
            return this._codProntoSocorro;
        };
        ProntoSocorro.prototype.setCodProntoSocorro = function (codigo) {
            this._codProntoSocorro = codigo;
        };
        ProntoSocorro.prototype.getEndereco = function () {
            return this._endereco;
        };
        ProntoSocorro.prototype.setEndereco = function (endereco) {
            this._endereco = endereco;
        };
        return ProntoSocorro;
    }());
    hospital.ProntoSocorro = ProntoSocorro;
})(hospital || (hospital = {}));
