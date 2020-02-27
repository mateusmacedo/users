import mongoose from 'mongoose';
import log from './log';

const logError = log.getLogger('error');
const logStdout = log.getLogger('stdout');

mongoose.Promise = global.Promise;

mongoose.connection.on('open', () => {
    logStdout.info('Success on database connect');
});

mongoose.connection.on('error', (e) => {
    throw new Error(`Could not connect to database:${e.message}`);
});

module.exports = async (user, pass, host, port, database) => {
    try {
        const options = {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true,
            connectTimeoutMS: 2000,
            socketTimeoutMS: 2000
        };
        return await mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${database}`, options);
    } catch (e) {
        await logError.error(e);
        return false;
    }
};