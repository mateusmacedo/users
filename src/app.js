import express from 'express';
import appConfig from '../src/config/application';
import mainRoute from './routes/main'

const app = express();
appConfig(app);
mainRoute(app);

export default app;




