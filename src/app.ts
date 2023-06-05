import express, { Express } from 'express';
import DBConnection from '@bootstrap/setupDatabase.bootstrap';
import { config } from '@configs/configEnvs';
import { AutoServer } from '@bootstrap/setupServer.bootstrap';

class Application {
	public initialize(): void {
		this.loadConfig();
		DBConnection();
		const app: Express = express();
		const server: AutoServer = new AutoServer(app);
		server.start();
	}

	private loadConfig(): void {
		config.validateConfig();
		config.cloudinaryConfig();
	}
}

const aplication: Application = new Application();
aplication.initialize();
