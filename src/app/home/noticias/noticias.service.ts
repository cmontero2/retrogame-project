import { Injectable } from '@angular/core';
import { Noticia } from './noticia';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

import data from '../../../assets/json/noticias.json';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
    public baseUrl = URL_API.SERVER_URL_API + "entradas?seccion=4";
    constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
    
    getNoticias() :Noticia[] {
        const noticias: Noticia[] = [];
        data.forEach((not: any) => {
            noticias.push(new Noticia(not.id, not.titulo, not.texto));
        });
        return noticias; 
    }
    
}