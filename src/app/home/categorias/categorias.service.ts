import { Injectable } from '@angular/core';
import { Categoria } from './categoria';

import data from '../../../assets/json/categorias.json';

@Injectable()
export class CategoriasService {
    constructor() { }


    getCategorias() :Categoria[] {
        let categorias: Categoria[] = [];
        data.forEach((cat: any) => {
            categorias.push(new Categoria(cat.id, cat.nombre, cat.descripcion));
        });
        return categorias; 
    }

}
