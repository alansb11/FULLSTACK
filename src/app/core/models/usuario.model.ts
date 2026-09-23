export enum Rol {
  ADMIN = 'admin',
  ESTUDIANTE = 'estudiante',
}

export interface Usuario {
  idUsuario: number;
  username: string;
  rol: Rol;
  idEstudiante: number | null;
}

export interface LoginResponse {
  access_token: string;
  usuario: Usuario;
}