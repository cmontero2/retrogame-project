export interface IJuegoCategoria {
    id?: number;
    categoria_id?: number;
    juego_id?: number;
    usuario_id?: number;
}

export class JuegoCategoria implements IJuegoCategoria {
    public id?: number;
    public categoria_id?: number;
    public juego_id?: number;
    public usuario_id?: number;
}