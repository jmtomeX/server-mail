// si no estamos en producción va a cargar nuestras variables de entorno
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

module.exports = {
    PORT: process.env.PORT || 3000,
    USER_MAIL: 'info@muchoruidoypocasluces.com',
    PASSW_MAIL: '1=8!SwSGfgx]',
    HOST_MAIL: 'mail.muchoruidoypocasluces.com',
};