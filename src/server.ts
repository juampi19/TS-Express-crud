import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import AppRoutes from './routes/routes'

//* Instancia de express
const app = express();

//* Middleware
app.use( morgan('dev') );
app.use( cors() );
app.use( express.json() );

//* Ruta general
app.use( AppRoutes );

export default app;