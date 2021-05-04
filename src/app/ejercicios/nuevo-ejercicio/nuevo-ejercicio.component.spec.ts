import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEjercicioComponent } from './nuevo-ejercicio.component';

describe('NuevoEjercicioComponent', () => {
  let component: NuevoEjercicioComponent;
  let fixture: ComponentFixture<NuevoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
