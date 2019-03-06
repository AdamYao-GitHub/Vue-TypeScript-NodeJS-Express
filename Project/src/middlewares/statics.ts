import path from 'path'
import compress from 'compression'
import * as express from 'express'

export default (app: express.Application) => {
  app.use(compress())
  app.use('/ui', express.static(path.resolve('./vue')))
}
