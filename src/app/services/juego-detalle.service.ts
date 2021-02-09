import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.constants";



@Injectable({ providedIn: 'root'})
export class JuegoDetalleService {
    public baseUrl = URL_API.SERVER_URL_API + "juego";
    constructor(private http: HttpClient) { }
}