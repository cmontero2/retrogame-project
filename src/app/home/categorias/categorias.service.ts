import { Injectable } from '@angular/core';
import { ICategoria } from './categoria';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

import data from '../../../assets/json/categorias.json';

@Injectable({ providedIn: 'root' })
export class CategoriasService {
    public baseUrl = URL_API + "categorias";
    constructor(private http: HttpClient) { }

    findAll(): Observable<HttpResponse<ICategoria[]>> {
        return this.http.get<any>(this.baseUrl);
    }

    async getCategorias() :Promise<any> {
        const response = await fetch(this.baseUrl, {
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*'}
        	});
        console.log(response, null, 2);
        return response;
    }

    /*
    getCategorias() :Categoria[] {
        let categorias: Categoria[] = [];
        data.forEach((cat: any) => {
            categorias.push(new Categoria(cat.id, cat.nombre, cat.descripcion));
        });
        return categorias; 
    }
    */

}
