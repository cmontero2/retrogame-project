
//Yii API
export interface IJuego {
    id?: number;
    nombre?: String;
    descripcion?: String;
    nombre_archivo?: String;
}

export class Juego implements IJuego {
    constructor(
        public id?: number,
        public nombre?: String,
        public descripcion?: String,
        public nombre_archivo?: String
    ) { }
}


//JSON
/*
export class Juego {
    id?: number;
    categoriasId?: string;
    categoriaNombre?: string[];
    nombre?: string;
    imagen?: string;

    constructor(id: number, categoriasId: string, categoriaNombre: string[], nombre: string, imagen: string) {
        this.id = id;
        for(let i = 0; i < categoriaNombre.length; i++) {
            this.categoriasId = categoriasId[i];
            this.categoriaNombre?.push(categoriaNombre[i]);
        }
        this.categoriaNombre = categoriaNombre;
        this.nombre = nombre;
        this.imagen = imagen;
    }
}
*/