import { Request, Response } from "express"
import { User } from "../models/user"
import * as ServiceUser from "../service/usuarios-service"

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const usuario: User = { ...req.body }
    const respService = await ServiceUser.createUser(usuario)
    if (respService) {
        return res.status(201).send({
            status: 'ok',
            message: 'Creado exitosamente'
        })
    } else {
        return res.status(201).send({
            status: 'error',
            message: 'No se pudo crear el usuario',
        })
    }
}