import * as functions from "firebase-functions";
import * as express from 'express'
import * as userRoutes from "./v1/routes/usuario.routes"

const app = express()
app.use(express.json())
app.use('/v1/users', userRoutes.default)

app.get('/', (req, res) => res.status(200).send({
    title: 'Por fin canequero',
    message: 'Ahora si nos vamos a poner a programar de lo lindo'
}))

exports.app = functions.https.onRequest(app)
