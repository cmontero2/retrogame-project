import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.constants';
import { Juego } from '../juegos/lista-juegos/juego';



@Injectable({ providedIn: 'root' })
export class UploadGameService {


    constructor(
        private http: HttpClient
    ) { }

    upload(juego: Juego) {
        return this.http.post(URL_API.SERVER_URL_API + "juegos", juego);
    }
}