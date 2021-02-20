export interface IEntradaDetalle {
    id?: number;
    texto?: String;
    fecha?: Date;
    entrada_id?: number;
    usuario_id?: number;
}

export class EntradaDetalle implements IEntradaDetalle {
    constructor(
        id?: number,
        texto?: String,
        fecha?: Date,
        entrada_id?: number,
        usuario_id?: number
    ) { }
}