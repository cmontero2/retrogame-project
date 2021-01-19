import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias?: Noticia[];
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

}


