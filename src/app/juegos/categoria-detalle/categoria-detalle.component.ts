import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../home/categorias/categoria';
import { CategoriasService } from '../../home/categorias/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-detalle',
  templateUrl: './categoria-detalle.component.html',
  styleUrls: ['./categoria-detalle.component.scss']
})
export class CategoriaDetalleComponent implements OnInit {

  categoria: Categoria[] = [];
  id!: number;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id;
      console.log(this.id);

      this.categoriasService.findById(this.id)
      .subscribe(
        data => {
          this.categoria = data
          this.categoria[0].nombre = this.categoria[0].nombre?.toLowerCase()
          console.log(this.categoria[0].nombre)
        },
        error => {
          console.log(error)
        }
      )
    })

    
  }

}
