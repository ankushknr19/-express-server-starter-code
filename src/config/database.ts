import mongoose from 'mongoose'
import { MONGO_URI } from './env'
import logger from '../utils/winstonLogger'

export async function connectDB() {
	try {
		await mongoose.connect(MONGO_URI)
	} catch (error) {
		logger.error(
			'error during inital connection to mongodb database: ',
			error
		)
		process.exit(1)
	}
}

mongoose.connection.on('connected', () =>
	logger.info('Mongo database connected...')
)

mongoose.connection.on('error', (err) => logger.error(err.message))

export async function disconnectDB() {
	try {
		logger.warn('Mongodb database disconnected...')
		await mongoose.connection.close()
	} catch (error) {
		logger.warn('Error during disconnecting mongodb database')
	}
}
