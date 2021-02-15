export interface ISeccion {
    id?: number;
    nombre?: string;
}

export class Seccion implements ISeccion{

    constructor(
        public id?: number, 
        public nombre?: string
    ) { }
}