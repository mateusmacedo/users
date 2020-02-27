const environment = require('dotenv');
environment.config();
module.exports = {
    server: {
        env: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.SERVER_HOST,
    },
    api: {
        prefix: process.env.API_URL_PREFIX,
        version: process.env.API_VERSION
    },
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        schema: process.env.DATABASE,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
    },
};