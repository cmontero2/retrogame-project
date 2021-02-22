import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

@Injectable({ providedIn: 'root' })
export class EntradaDetalleService {
    public baseUrl = URL_API.SERVER_URL_API + "comentarios";
    constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    findById(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "?entrada=" + id);
    }

    
    findEntrada(id: number): Observable<any> {
        return this.http.get(URL_API.SERVER_URL_API + "entradas?id=" + id);
    }
}