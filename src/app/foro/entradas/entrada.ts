export interface IEntrada {
    id?: number;
    titulo?: string;
    texto?: String;
    fecha?: Date;
    usuario_id?: number;
    seccion_id?: number;
    estado?: CharacterData;
}

export class Entrada implements IEntrada {
    constructor(
        id?: number,
        titulo?: string,
        texto?: String,
        fecha?: Date,
        usuario_id?: number,
        seccion_id?: number,
        estado?: CharacterData
    ) { }
}