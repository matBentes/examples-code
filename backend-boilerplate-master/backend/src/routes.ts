import { Router } from 'express'
import User from './controller/UserController'

const routes = Router()

routes.get('/', User.helloWorld)

export default routes
