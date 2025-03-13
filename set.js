const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOdxE0aqpWsALKHjjpm6dhwBBg9wTVJzyv28xzqmZhz1nZ99SgXQ63f31G8hyTNACNWD0BooKXyBF7ZI2BQIjoNRRhCrQBSGkEIyAPg2iU2JQndudy6vqsIx0V7BO69gUE33oxOrUmOlNrGi9V/DogqL2Exz8AVAMmduUT/RD425mvjTgLirZkOVK73A76WTuTW/mloZDe/f8FTxaRIgrnB0nxQmlqILJAjVriKvv0bfMqsyX/Erz53iVeAqF5f562NyIoHeCnNsKUocMNbu4JPL36J9x72DzZaYXnSA6TzvM7hKeruODUM53qXLEtj7xhtXWZPj9kz7BxwyFeogyimnzbd0dJdl6TiReTul1eSGhfd3PZNUzNgY2ompdxE5n2SiGVXvS94g7xkrcIuGi5s7ad1Y1bEJPnNd+WWjKSaJVWk2iKpYizb1+Jb6ufmXl/H90P675kO8wJ1fvW0qvdJbLNJBkNjTci+TTVaz1GiidqacIwfforxuPLBSXOcSBXGnr2dqsylMp4L3WcAbVsLHIrUM8d3bp8ZM+pHX1J5a7Evm8X+3voj2zroW3Xi8PkQCPOqNnqrbTykknNzPtdoq3zjjq70R1nKqenZTRMDiI3tri6plCJqeltxOK8aZRfCGLj6/vLzqjRg/BiHt0QYWOmNAKUpxn7R7f63cBDC8WCipE3+UFokZiYs+mYWoZGRMfEo3ZWeios5P1hCn5OVoZ7Nw93prx/hV0QVHlASIEhRomNK8aExECj4iA0d8/uyBDN/o0rr1O4LogwhWhTlYXSQ7DX67++giDIK8zajVZoLYLVIER+7mNKMXZkbQ61hmsghO+IPUEKQGjCCYEPbogRBccoBYPJMVlRlKrt73PjJfVQhZXDi9sWsqnPHv+AgNRCHwxehkOA/jSEyXxxWdZ/iUYhFIkhUNBEFnQBfhjZtozv+8nfJvM7BxjWLN4F58zl1tSWceL7eTdhqf2qEIhGNGqRl3gw+BcF3Z+RtkfcO9WMinm5NDnMv7KS3ptDlJBk4OgIV9wn56C0dtnT6l52OIZwzG/0aQx6IL0PYK4fTkvCHxP4oaiMOiPBP4v8uPaCgmL4keGaIv7IXp7IkQU4oSAEVAXTIcZEmViemIz6M1msn6U1aMMPk36lfZnmqzB3r2rmdZLztkEHXTfjC3ku6YykZfO+j6/d7xGEMbcYMu+/gsIGAE89Myexbm1fOGhsCwXg9k6UBvb5tgLGww68rm38cz+/DKblJbbOPZODvlsP3GtvmgkpyBdbfoEGrlZB44cR3143ivy5rW97RmWr5eZh5t2sB22N3Yxo9c0myfboOPv73HBKOdk7F5PZO5PYz1mcylj1OJ8bYTI5qeaPD5gfimoJXZDIxzUlXNW4O7KHoX4+pzD9x5IPvoXv0/I20e0Ioze6yyDrUX/Zc7XlLOP7heMj4L8TZIUp+anwbW4deaH+U1LrdldZ7OUs+WtPHbHUhMwCaHD6xCxIXg8fnZBkUAa5VXajkoWVjkOQRckkFD5c1BtnCJCYVqAETfocdKAF4Th4x/Lp5z93gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
