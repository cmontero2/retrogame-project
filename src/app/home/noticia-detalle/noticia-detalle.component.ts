import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/noticias.json';
import { ActivatedRoute, Params } from '@angular/router';
import { Noticia } from '../noticias/noticia';
import { NoticiasService } from '../noticias/noticias.service';
import { NoticiasDetalleService } from './noticia-detalle.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {
  public id: number = 0;
  public noticias?: Noticia[];
  public imgPath?: String;
  constructor(private activatedRoute: ActivatedRoute, private noticiasService: NoticiasService, private noticiasDetalleService: NoticiasDetalleService) {

  }
  /*
  findById(id: number): Noticia {
    let result = new Noticia();
    if (this.noticias && this.noticias.length > 0) {
      result = this.noticias.filter(noticia => noticia.id == id)[0];
    }
    return result;
  }
*/
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });
    this.noticiasDetalleService.findById(this.id)
      .subscribe(
        data => {
          this.noticias = data;
          console.log('noticias', this.noticias)
        },
        error => {
          console.log(error);
        });

        this.imgPath = `../../../assets/img/entradas/entrada${this.id}.png`;
  }



}
