import { Injectable } from '@angular/core';
import { Juego } from '../juegos/lista-juegos/juego';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../services/app.constants";

@Injectable({ providedIn: 'root'})
export class ListaJuegosService {
    public baseUrl = URL_API.SERVER_URL_API + "juegos";
    constructor(private http: HttpClient) { }

    //Devuelve todos los juegos
    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    //Devuelve el juego pasándole el id
    findById(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "?juego=" + id);
    }

    //Devuelve el juego del pasándole el nombre
    findByName(name: string): Observable<any> {
        return this.http.get(this.baseUrl + "?nombre=" + name);
    }

    //Devuelve todos los juegos ordenados por visitas
    findByOrderByVisits(): Observable<any> {
        return this.http.get(this.baseUrl + "?visitas=true");
    }

    //Devuelve los juegos que pertenecen a la misma empresa
    findByCompanyId(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "?empresa=" + id);
    }

    //Devuelve los ids de los juegos pasándole el id de la categoría
    //Controlador: JuegosCategoriaController
    findGamesIdByCategoryId(id: number): Observable<any> {
        return this.http.get(URL_API.SERVER_URL_API + "juegos-categoria?categoria=" + id);
    }

    //Devuelve el usuario pasándole el id
    findCompanyByUserId(id: number): Observable<any> {
        return this.http.get(URL_API.SERVER_URL_API + "users/" + id);
    }

    //Actualiza el juego en la base de datos
    update(id: any, params: any) {
        return this.http.put(this.baseUrl + "/" + id, params);
    }
}