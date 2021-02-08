export interface IUsuario {
    id?: number;
    rol_id?: number;
    nivel_foro_id?: number;
    user?: string;
    nombre?: string;
    password?: string;
    email?: string;
    nacimiento?: Date;
    estado?: String; 
}
export class Usuario implements IUsuario{
    constructor(
    public id?: number,
    public rol_id?: number,
    public nivel_foro_id?: number,
    public user?: string,
    public nombre?: string,
    public password?: string,
    public email?: string,
    public nacimiento?: Date,
    public estado?: String
    ) {}    
}