import dotenv from 'dotenv'

dotenv.config()

export const PORT = (process.env.PORT ?? 5800) as number
export const NODE_ENV = process.env.NODE_ENV as string
export const MONGO_URI = process.env.MONGO_URI as string
