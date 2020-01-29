import pino, { LoggerOptions } from 'pino'

const getConfig = (): LoggerOptions => {
  const isDev = process.env.NODE_ENV === 'development'
  return {
    name: process.env.APP_ID,
    level: process.env.LOG_LEVEL || 'info',
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

export default logger
