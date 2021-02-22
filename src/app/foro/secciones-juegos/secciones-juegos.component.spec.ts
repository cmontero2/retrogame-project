import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesJuegosComponent } from './secciones-juegos.component';

describe('SeccionesJuegosComponent', () => {
  let component: SeccionesJuegosComponent;
  let fixture: ComponentFixture<SeccionesJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionesJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
