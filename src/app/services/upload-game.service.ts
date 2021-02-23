import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.constants';
import { Juego } from '../juegos/lista-juegos/juego';



@Injectable({ providedIn: 'root' })
export class UploadGameService {


    constructor(
        private http: HttpClient
    ) { }

    //Sube el juego pasado como parámetro a la base de datos
    upload(juego: Juego) {
        return this.http.post(URL_API.SERVER_URL_API + "juegos", juego);
    }

    //Sube el juego con su categoría a la tabla JuegosCategoria
    uploadToGameCategory(juegoCategoria: Juego) {
        return this.http.post(URL_API.SERVER_URL_API + "juegos-categoria", juegoCategoria);
    }

    //Guarda la imagen en la carpeta de imágenes de la API
    uploadLogo(logo: File, nombre: string) {
        let formData = new FormData();
        formData.append("logo", logo);
        return this.http.post(URL_API.SERVER_URL_API + "juegos/savelogo", formData);
    }
}