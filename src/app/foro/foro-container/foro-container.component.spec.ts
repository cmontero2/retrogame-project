import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoContainerComponent } from './foro-container.component';

describe('ForoContainerComponent', () => {
  let component: ForoContainerComponent;
  let fixture: ComponentFixture<ForoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
