import { Injectable } from '@angular/core';
import { Seccion } from './seccion';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

import data from '../../../assets/json/secciones.json';

@Injectable({ providedIn: 'root' })
export class SeccionesService {
    public baseUrl = URL_API.SERVER_URL_API + "secciones";
    constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
}


/*@Injectable()
export class SeccionesService {
    constructor() { }

    getSecciones() :Seccion[] {
        const secciones: Seccion[] = [];
        data.forEach((sec: any) => {
            secciones.push(new Seccion(sec.id, sec.nombre));
        });
        return secciones; 
    }

}*/