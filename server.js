import http from 'http';
import app from './src/app';
import config from './src/config';
import database from './src/config/database';
import log from './src/config/log';

const logStdout = log.getLogger('stdout');
const logError = log.getLogger('error');

const server = http.createServer(app);

database(config.db.user, config.db.pass, config.db.host, config.db.port, config.db.schema)
    .then(async conn => {
        if (conn.connection.readyState === 1) {
            await logStdout.info('App start');
            server.listen(config.server.port);
        }
    })
    .catch(async e => {
        process.exit(1);
    });

