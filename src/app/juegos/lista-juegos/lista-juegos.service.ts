import { Injectable } from '@angular/core';
import { Juego } from './juego';

import data from '../../../assets/json/juegos.json';

@Injectable()
export class ListaJuegosService {
    constructor() { }

    getJuegos() :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            juegos.push(new Juego(juego.id, juego.nombre, juego.descripcion));
        });
        return juegos;
    }
}