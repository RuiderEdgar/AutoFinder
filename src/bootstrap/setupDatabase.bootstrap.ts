import mongoose from 'mongoose';
import Logger from 'bunyan';
import { logger } from '@configs/configLogs';
import { config } from '@configs/configEnvs';

const log: Logger = logger.createLogger('setupDatabase');

export default () => {
	const connect = () => {
		mongoose
			.connect(`${config.DATABASE_URL}`)
			.then(() => {
				log.info('Successfully connected to database');
			})
			.catch(error => {
				log.error('Error connecting to database', error);
				return process.exit(1);
			});
	};

	connect();

	mongoose.connection.on('disconnected', connect);
};