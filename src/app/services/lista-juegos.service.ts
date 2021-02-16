import { Injectable } from '@angular/core';
import { Juego } from '../juegos/lista-juegos/juego';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from "../services/app.constants";

@Injectable({ providedIn: 'root'})
export class ListaJuegosService {
    public baseUrl = URL_API.SERVER_URL_API + "juegos";
    constructor(private http: HttpClient) { }

    //Yii API
    findAll(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    findById(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "?juego=" + id)
    }

    findByCompanyId(id: number): Observable<any> {
        return this.http.get(this.baseUrl + "?empresa=" + id);
    }

    findGamesIdByCategoryId(id: number): Observable<any> {
        return this.http.get(URL_API.SERVER_URL_API + "juegos-categoria?categoria=" + id);
    }

    findCompanyByUserId(id: number): Observable<any> {
        return this.http.get(URL_API.SERVER_URL_API + "users/" + id);
    }
    
    //JSON
    //Devuelve todos los juegos
    /*
    getJuegos() :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            let categoriaNombres: string[] = [];
            categoriaNombres = this.getCategoriaNombres(juego.categoriasId);
            juegos.push(new Juego(juego.id, juego.categoriasId, categoriaNombres, juego.nombre, juego.imagen));
        });
        return juegos;
    }
    */

    //JSON
    /*
    getJuegosPorCategoriaId(categoriaId: string) :Juego[] {
        const juegos: Juego[] = [];
        data.forEach((juego: any) => {
            for(let i = 0; i < juego.categoriasId.length; i++) {
                if(juego.categoriasId[i] == categoriaId) {
                    let categoriaNombres: string[] = [];
                    categoriaNombres = this.getCategoriaNombres(juego.categoriasId);
                    juegos.push(new Juego(juego.id, juego.categoriasId, categoriaNombres, juego.nombre, juego.imagen));
                }
            }
        })
        return juegos;
    }
    */

    //JSON
    /*
    getCategoriaNombres(categoriaId: number[]) :string[] {
        const categoriaNombres: string[] = [];
        for(let i = 0; i < categoriaId.length; i++) {
            categorias.forEach((categoria: any) => {
                if(categoria.id == categoriaId[i]) {
                    categoriaNombres.push(categoria.nombre);
                }
            })
        }
        return categoriaNombres;
    }
    */
}