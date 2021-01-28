import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDescripcionComponent } from './juego-descripcion.component';

describe('JuegoDescripcionComponent', () => {
  let component: JuegoDescripcionComponent;
  let fixture: ComponentFixture<JuegoDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
