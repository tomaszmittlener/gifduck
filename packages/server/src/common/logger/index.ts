import pino, { LoggerOptions } from 'pino'
import pinoExpress from 'express-pino-logger'

const getConfig = (): LoggerOptions => {
  const isDev = process.env.NODE_ENV === 'development'
  return {
    name: process.env.APP_ID,
    level: process.env.LOG_LEVEL,
    // prettify logs in development
    ...(isDev && {
      prettyPrint: {
        levelFirst: true,
        errorProps: 'response,request,config,location,err,errInfo,errUrl',
      },
    }),
  }
}

const logger = pino(getConfig())
// shared configuration with logger
const loggerMiddleware = pinoExpress({ logger })

export { loggerMiddleware }
export default logger
