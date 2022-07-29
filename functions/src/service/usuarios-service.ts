import { persistenceFirestore } from "../utils/connect-admin-firebase"
import { User } from "../models/user"

export const createUser = async (body: User): Promise<FirebaseFirestore.WriteResult | void> => {
    try {
        const user: FirebaseFirestore.WriteResult = await persistenceFirestore.collection("usuarios").doc().create(body)
        return user
    } catch (error) {
        return undefined
    }
}