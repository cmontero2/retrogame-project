import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { URL_API } from './app.constants';
import { Juego } from '../juegos/lista-juegos/juego';



@Injectable({ providedIn: 'root' })
export class UploadGameService {


    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    upload(juego: Juego) {
        return this.http.post(URL_API.SERVER_URL_API + "juegos", juego);
    }
}