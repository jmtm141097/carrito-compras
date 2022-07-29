import { Request, Response } from 'express'
import { User } from '../models/user'
import * as ServiceUser from '../service/usuarios-service'

export const createUser = (req: Request, res: Response): void => {
  const usuario: User = { ...req.body }
  const respService = ServiceUser.createUser(usuario)
  if (respService != null) {
    res.status(201).send({
      status: 'ok',
      message: 'Creado exitosamente'
    })
  } else {
    res.status(400).send({
      status: 'error',
      message: 'No se pudo crear el usuario'
    })
  }
}
