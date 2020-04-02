import express from 'express'
import cors from 'cors'
import routes from './routes'
// import mongoose from 'mongoose'

class App {
  public express: express.Application

  constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  /*
  private database() {
    const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env
      mongoose.connect('mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_HOST}/tsnode', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.connection.on('error', () => console.error('connection error:'))
    mongoose.connection.once('open', () => console.log('database connected'))
  }
  */

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
