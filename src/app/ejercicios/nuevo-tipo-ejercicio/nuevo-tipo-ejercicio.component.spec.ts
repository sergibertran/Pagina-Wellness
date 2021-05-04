import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoEjercicioComponent } from './nuevo-tipo-ejercicio.component';

describe('NuevoTipoEjercicioComponent', () => {
  let component: NuevoTipoEjercicioComponent;
  let fixture: ComponentFixture<NuevoTipoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
