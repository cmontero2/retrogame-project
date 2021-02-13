export interface INoticia {
    id?: number;
    titulo?: String;
    texto?: String;
    fecha?: Date;
}
export class Noticia  implements INoticia{

    constructor(
        public id?: number,
        public titulo?: String,
        public texto?: String,
        public fecha?: Date
    ) { }
}
/*
export class Noticia {
    id?: number;
    titulo?: string;
    texto?: string;

    constructor(id: number, titulo: string, texto: string) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
    }
}
*/