import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../../services/app.constants";

@Injectable({ providedIn: 'root' })
export class PerfilService {
    public baseUrl = URL_API.SERVER_URL_API + "users/";
    constructor(private http: HttpClient) { }

    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    findById(id: number): Observable<any> {
        //console.log("perfil PATH: " + this.baseUrl + id)
        return this.http.get(this.baseUrl + id);
    }

    public baseUrlJuegos = URL_API.SERVER_URL_API + "usuarios-juego?usuario=";
    findUserJuegoById(id: number): Observable<any> {
        return this.http.get(this.baseUrlJuegos + id);
    }

    public baseUrlPhoto = URL_API.SERVER_URL_API + "assets/img/"
    findPhotoByName(nombre: string){
        return this.http.get(this.baseUrlPhoto + nombre);
    }

}