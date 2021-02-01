export interface ICategoria {
    id?: number;
    nombre?: String;
    descripcion?: String
}

export class Categoria implements ICategoria {
    constructor(
        public id?: number,
        public nombre?: String,
        public descripcion?: String
    ) { }
}


/*
export class Categoria {
    id?: number;
    nombre?: string;
    descripcion?: string;

    constructor(id: number, nombre: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
*/