import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEjercicioComponent } from './tipo-ejercicio.component';

describe('TipoEjercicioComponent', () => {
  let component: TipoEjercicioComponent;
  let fixture: ComponentFixture<TipoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
