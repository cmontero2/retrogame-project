export class Juego {
    id?: number;
    categoria?: string;
    nombre?: string;
    imagen?: string;
    descripcion?: string;

    constructor(id: number, categoria: string, nombre: string, imagen: string, descripcion: string) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}