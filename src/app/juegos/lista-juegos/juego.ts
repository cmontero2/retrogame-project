export class Juego {
    id?: number;
    nombre?: string;
    imagen?: string;
    descripcion?: string;

    constructor(id: number, nombre: string, imagen: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}