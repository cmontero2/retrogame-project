import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia';
import { NoticiasService } from './noticias.service';
import { INoticia } from './noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  //noticias?: Noticia[];
  noticias:INoticia[] = [];
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    //this.noticias = this.noticiasService.getNoticias();
    this.noticiasService.findAll()
    .subscribe(
      data =>{
        this.noticias = data;
        console.log('noticias', this.noticias)
      },
      error =>{
        console.log(error);
      })
  }

}


