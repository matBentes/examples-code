import { Request, Response } from 'express'

class UserController {
  public helloWorld (req: Request, res: Response): Response<string> {
    return res.send('Hello from a aaaa')
  }
}

export default new UserController()
