import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juego-container',
  templateUrl: './juego-container.component.html',
  styleUrls: ['./juego-container.component.scss']
})
export class JuegoContainerComponent implements OnInit {

  id: number=0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log(this.id);
    })
  }

}
