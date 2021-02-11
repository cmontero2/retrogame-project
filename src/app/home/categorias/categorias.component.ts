import { Component, OnInit } from '@angular/core';
import { ICategoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias:ICategoria[] = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {

    this.categoriasService.findAll()
    .subscribe(
      data =>{
        this.categorias = data;
        console.log('categ', this.categorias)
      },
      error =>{
        console.log(error);
      })
  }

}
