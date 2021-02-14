import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../home/categorias/categoria';
import { CategoriasService } from '../../home/categorias/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-detalle',
  templateUrl: './categoria-detalle.component.html',
  styleUrls: ['./categoria-detalle.component.scss']
})
export class CategoriaDetalleComponent implements OnInit {

  categoria: ICategoria[] = [];
  id!: number;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id;

      this.categoriasService.findById(this.id)
      .subscribe(
        data => {
          this.categoria = data
          //console.log(data);
          //console.log(this.categoria);
        },
        error => {
          console.log(error)
        }
      )
    })

    
  }

}
