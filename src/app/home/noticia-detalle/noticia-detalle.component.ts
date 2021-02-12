import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/noticias.json';
import { ActivatedRoute, Params } from '@angular/router';
import { Noticia } from '../noticias/noticia';
import { NoticiasService } from '../noticias/noticias.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {
  public id: number = 0;
  private noticias?: Noticia[];
  public noticia?: Noticia;

  constructor(private activatedRoute: ActivatedRoute, private noticiasService: NoticiasService) {

  }
  findById(id: number): Noticia {
    let result = new Noticia();
    if (this.noticias && this.noticias.length > 0) {
      result = this.noticias.filter(noticia => noticia.id == id)[0];
    }
    return result;
  }

  ngOnInit(): void {
    this.noticiasService.findAll()
      .subscribe(
        data => {
          this.noticias = data;
          console.log('noticias', this.noticias)
        },
        error => {
          console.log(error);
        });

    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });
    this.noticia = this.findById(this.id);
  }



}
