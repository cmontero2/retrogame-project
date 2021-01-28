import { Injectable } from '@angular/core';
import { Juego } from './juego';

import data from '../../../assets/json/juegos.json';
import categorias from '../../../assets/json/categorias.json';

@Injectable()
export class ListaJuegosService {
    constructor() { }

    //Devuelve todos los juegos
    /*getJuegos() :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            let categoriaNombres: string[] = [];
            categoriaNombres = this.getCategoriaNombres(juego.categoriasId);
            juegos.push(new Juego(juego.id, juego.categoriasId, categoriaNombres, juego.nombre, juego.imagen, juego.descripcion));
        });
        return juegos;
    }*/

    getJuegosPorCategoriaId(categoriaId: string) :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            for(let i = 0; i < juego.categoriasId.length; i++) {
                if(juego.categoriasId[i] == categoriaId) {
                    let categoriaNombres: string[] = [];
                    categoriaNombres = this.getCategoriaNombres(juego.categoriasId);
                    juegos.push(new Juego(juego.id, juego.categoriasId, categoriaNombres, juego.nombre, juego.imagen));
                }
            }
        })
        return juegos;
    }

    getCategoriaNombres(categoriaId: number[]) :string[] {
        const categoriaNombres: string[] = [];
        for(let i = 0; i < categoriaId.length; i++) {
            categorias.forEach((categoria: any) => {
                if(categoria.id == categoriaId[i]) {
                    categoriaNombres.push(categoria.nombre);
                }
            })
        }
        return categoriaNombres;
    }
}