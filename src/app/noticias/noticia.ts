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