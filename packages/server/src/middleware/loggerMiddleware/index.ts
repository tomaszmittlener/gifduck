import pinoExpress from 'express-pino-logger'
import logger from 'common/logger'

// shared configuration with pino logger
const loggerMiddleware = pinoExpress({ logger })

export default loggerMiddleware
