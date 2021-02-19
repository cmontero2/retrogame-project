
//Yii API
export interface IJuego {
    id?: number;
    nombre?: string;
    descripcion?: String;
    visitas?: number;
    empresa_id?: number;
    nombre_archivo?: String;
    estado?: CharacterData;
    iframe_url?: string;
}

export class Juego implements IJuego {
    constructor(
        public id?: number,
        public nombre?: string,
        public descripcion?: String,
        public visitas?: number,
        public empresa_id?: number,
        public nombre_archivo?: String,
        public estado?: CharacterData,
        public iframe_url?: string
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