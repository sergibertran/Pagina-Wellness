import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoIngredientesComponent } from './nuevo-tipo-ingredientes.component';

describe('NuevoTipoIngredientesComponent', () => {
  let component: NuevoTipoIngredientesComponent;
  let fixture: ComponentFixture<NuevoTipoIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
