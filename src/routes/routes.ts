import { Router } from 'express';
import UserRoutes from './user/user.routes';

const router = Router();


//* Rutas de la aplicación
router.use( '/users', UserRoutes );


export default router;