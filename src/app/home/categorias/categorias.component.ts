import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias?: Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias = this.categoriasService.getCategorias();        
  }

}
