import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/noticias.json';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {
  public id: number = 0;

  constructor( private activatedRoute: ActivatedRoute) {  


  }
/*
  findById(id: number) {
    return this.noticia.filter(not => not.id == this.id);
  }
*/
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });
  }



}
