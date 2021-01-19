import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoContainerComponent } from './juego-container.component';

describe('JuegoContainerComponent', () => {
  let component: JuegoContainerComponent;
  let fixture: ComponentFixture<JuegoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
