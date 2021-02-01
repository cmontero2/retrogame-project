import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ICategoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias?: ICategoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.findAll().subscribe((res: HttpResponse<ICategoria[]>) => (this.categorias = res.body || []));
  }

}
