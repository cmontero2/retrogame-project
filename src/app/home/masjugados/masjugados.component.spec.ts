import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasjugadosComponent } from './masjugados.component';

describe('MasjugadosComponent', () => {
  let component: MasjugadosComponent;
  let fixture: ComponentFixture<MasjugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasjugadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasjugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
