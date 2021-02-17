export interface IUsuarioJuego {
    id?: number;
    juego_id?: number;
    usuario_id?: number;
    fecha_id?: String;
}

export class UsuarioJuego implements IUsuarioJuego {
    constructor(
        public id?: number,
        public juego_id?: number,
        public usuario_id?: number,
        public fecha_id?: String
    ) { }
}