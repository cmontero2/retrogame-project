import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetalleContainerComponent } from './juego-detalle-container.component';

describe('JuegoDetalleContainerComponent', () => {
  let component: JuegoDetalleContainerComponent;
  let fixture: ComponentFixture<JuegoDetalleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDetalleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetalleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
