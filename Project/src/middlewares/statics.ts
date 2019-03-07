import path from 'path'
import compress from 'compression'
import * as express from 'express'

export default (app: express.Application) => {
  app.use(compress())
  app.use('/ui', express.static(path.resolve('./ui/webapp')))
  app.use('/css', express.static(path.resolve('./ui/webapp/css')))
  app.use('/js', express.static(path.resolve('./ui/webapp/js')))
  app.use('/img', express.static(path.resolve('./ui/webapp/img')))
  app.use('/fonts', express.static(path.resolve('./ui/webapp/fonts')))
}
