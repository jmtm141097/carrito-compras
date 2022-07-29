enum Role {
    ADMIN = "Admin",
    USER = "User"
}

export type User = {
    usuario: String,
    role: Role
    clave: String,
    nombre: String
}