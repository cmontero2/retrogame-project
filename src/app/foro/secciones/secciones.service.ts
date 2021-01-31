import { Injectable } from '@angular/core';
import { Seccion } from './seccion';

import data from '../../../assets/json/secciones.json';

@Injectable()
export class SeccionesService {
    constructor() { }

    getSecciones() :Seccion[] {
        const secciones: Seccion[] = [];
        data.forEach((sec: any) => {
            secciones.push(new Seccion(sec.id, sec.nombre));
        });
        return secciones; 
    }

}