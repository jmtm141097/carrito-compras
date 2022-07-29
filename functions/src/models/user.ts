enum Role {
  ADMIN = 'Admin',
  USER = 'User'
}

export interface User {
  usuario: String
  role: Role
  clave: String
  nombre: String
}
