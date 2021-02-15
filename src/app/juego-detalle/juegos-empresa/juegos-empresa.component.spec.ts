import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosEmpresaComponent } from './juegos-empresa.component';

describe('JuegosEmpresaComponent', () => {
  let component: JuegosEmpresaComponent;
  let fixture: ComponentFixture<JuegosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
