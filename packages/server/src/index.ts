import 'common/env'
import Server from 'common/server'
import Routes from './routes'

const port = parseInt(process.env.PORT || '')

export default new Server().router(Routes).listen(port)
