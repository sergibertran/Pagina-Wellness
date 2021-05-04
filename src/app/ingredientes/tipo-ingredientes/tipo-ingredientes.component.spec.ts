import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoIngredientesComponent } from './tipo-ingredientes.component';

describe('TipoIngredientesComponent', () => {
  let component: TipoIngredientesComponent;
  let fixture: ComponentFixture<TipoIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
