import { Injectable } from '@angular/core';
import { Noticia } from './noticia';

import data from '../../../assets/json/noticias.json';

@Injectable()
export class NoticiasService {
    constructor() { }

    getNoticias() :Noticia[] {
        let noticias: Noticia[] = [];
        data.forEach((not: any) => {
            noticias.push(new Noticia(not.id, not.titulo, not.texto));
        });
        return noticias; 
    }

}