export class Juego {
    id?: number;
    categoriasId?: string;
    categoriaNombre?: string[];
    nombre?: string;
    imagen?: string;
    descripcion?: string;

    constructor(id: number, categoriasId: string, categoriaNombre: string[], nombre: string, imagen: string, descripcion: string) {
        this.id = id;
        for(let i = 0; i < categoriaNombre.length; i++) {
            this.categoriasId = categoriasId[i];
            this.categoriaNombre?.push(categoriaNombre[i]);
        }
        this.categoriaNombre = categoriaNombre;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}