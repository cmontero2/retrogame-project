import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.constants';
import { UsuarioJuego } from './../models/UsuarioJuego';

@Injectable({ providedIn: 'root'})
export class UploadUserGameService {


    constructor(
        private http: HttpClient
    ) { }

    uploadUsuarioJuego(usuarioJuego: UsuarioJuego) {
        console.log("HOLAAAAAAAA", usuarioJuego);
        return this.http.post(URL_API.SERVER_URL_API + "usuarios-juego", usuarioJuego);
    }
}