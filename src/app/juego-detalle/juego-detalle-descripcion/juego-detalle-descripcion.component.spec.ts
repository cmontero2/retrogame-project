import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetalleDescripcionComponent } from './juego-detalle-descripcion.component';

describe('JuegoDetalleDescripcionComponent', () => {
  let component: JuegoDetalleDescripcionComponent;
  let fixture: ComponentFixture<JuegoDetalleDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDetalleDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetalleDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
