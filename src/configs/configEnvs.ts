import dotenv from 'dotenv';
dotenv.config({});

class Config {
	public DATABASE_URL: string | undefined;
	public JWT_TOKEN: string | undefined;
	public NODE_ENV: string | undefined;
	public SECRET_KEY_ONE: string | undefined;
	public SECRET_KEY_TWO: string | undefined;
	public CLIENT_URL: string | undefined;
	public SERVER_PORT: string | number | undefined;
	public CLOUD_NAME: string | undefined;
	public CLOUD_API_KEY: string | undefined;
	public CLOUD_API_SECRET: string | undefined;
	public SALT_ROUND: string | undefined;

	constructor() {
		this.DATABASE_URL = process.env.DATABASE_URL;
		this.JWT_TOKEN = process.env.JWT_TOKEN;
		this.NODE_ENV = process.env.NODE_ENV;
		this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE;
		this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO;
		this.CLIENT_URL = process.env.CLIENT_URL;
		this.SERVER_PORT = process.env.SERVER_PORT;
		this.CLOUD_NAME = process.env.CLOUD_NAME;
		this.CLOUD_API_KEY = process.env.CLOUD_API_KEY;
		this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;
		this.SALT_ROUND = process.env.SALT_ROUND;
	}

	public validateConfig(): void {
		console.log(this);
		for (const [key, value] of Object.entries(this)) {
			if (value === undefined) {
				throw new Error(`Configuration ${key} is undefindes`);
			}
		}
	}
}

export const config: Config = new Config();
