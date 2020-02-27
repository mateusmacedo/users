import bodyParse from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet'
import favicon from 'serve-favicon';
import path from 'path';
import config from "./index";

module.exports = (app) => {
    app.set('port', config.server.port);
    app.use(favicon(path.join(__dirname, '../', 'favicon.ico')));
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParse.urlencoded({extended: false}));
    app.use(bodyParse.json());
};