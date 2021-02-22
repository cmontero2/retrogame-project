export interface ISeccionJuegos {
    id?: number;
    nombre?: string;
}

export class SeccionJuegos implements ISeccionJuegos{

    constructor(
        public id?: number, 
        public nombre?: string
    ) { }
}