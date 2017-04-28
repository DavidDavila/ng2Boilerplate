"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataApp = (function () {
    function dataApp() {
    }
    return dataApp;
}());
exports.dataApp = dataApp;
exports.appConstant = {
    appName: 'My account',
    regex: {
        email: '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
        date: '^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$',
        nif: '^([0-9]{8})([TRWAGMYFPDXBNJZSQVHLCKET]{1}|[trwagmyfpdxbnjzsqvhlcket]{1})$',
        tarjetaClub: '^([0-9]{4,8})$'
    },
    textosInfoForm: {
        acceso: {
            inicial: "Déjanos tu correo electrónico para que podamos localizarte en condiciones.",
            registrado: "Genial. Ahora indica por favor tu contraseña de acceso para continuar",
            noRegistrado: "Genial. Ahora verifica el correo electrónico y añade una contraseña de acceso para continuar"
        },
        recuperarContrasena: {
            inicial: "¿Olvidaste tu contraseña? Sólo necesitamos que nos dejes tu correo electrónico para echarte un cable."
        }
    },
    textosErroresForm: {
        acceso: {
            email: "¡ Ooops ! Los emails no coinciden",
            password: "¡ Ooops ! La contraseña no es correcta, por favor revísala"
        },
        recuperarContrasenaEmail: {
            email: "¡ Ooops ! No tenemos registro de este correo electrónico en nuestro sistema"
        }
    }
};
//# sourceMappingURL=dataApp.type.js.map