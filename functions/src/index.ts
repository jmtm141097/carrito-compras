import functions from 'firebase-functions'
import express, { Application, Request, Response } from 'express'
import userRoutes from './v1/routes/usuario.routes'

const app: Application = express()
app.use(express.json())
app.use('/v1/users', userRoutes)

app.get('/', (_req: Request, res: Response) => res.status(200).send({
  title: 'Por fin canequero',
  message: 'Ahora si nos vamos a poner a programar de lo lindo'
}))

exports.app = functions.https.onRequest(app)
