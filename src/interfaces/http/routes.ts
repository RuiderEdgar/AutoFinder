import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { config } from '@configs/configEnvs';
// import { authMiddleware } from '@helpers/middlewares/auth-middleware';

export default (app: Application) => {
	const routes = () => {
		app.use(config.BASE_PATH!, authRoutes.routes());
	};

	routes();
};
