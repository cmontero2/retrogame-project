import { Injectable } from '@angular/core';
import { Juego } from './juego';

import data from '../../../assets/json/juegos.json';

@Injectable()
export class ListaJuegosService {
    constructor() { }

    getJuegos() :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            juegos.push(new Juego(juego.id, juego.categoria, juego.nombre, juego.imagen, juego.descripcion));
        });
        return juegos;
    }

    getJuegosCategoria(categoria: string) :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            if(juego.categoria == categoria) {
                juegos.push(new Juego(juego.id, juego.categoria, juego.nombre, juego.imagen, juego.descripcion));
            }
        })
        return juegos;
    }
}