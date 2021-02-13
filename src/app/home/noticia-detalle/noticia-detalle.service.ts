import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

@Injectable({ providedIn: 'root' })
export class NoticiasDetalleService {
    public baseUrl = URL_API.SERVER_URL_API + "entradas";
    constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    findById(id: number): Observable<any> {
        console.log("Entradas PATH: " + this.baseUrl + "?id=" + id)
        return this.http.get(this.baseUrl + "?id=" + id);
    }

}