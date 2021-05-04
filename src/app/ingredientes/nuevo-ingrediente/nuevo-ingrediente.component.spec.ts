import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIngredienteComponent } from './nuevo-ingrediente.component';

describe('NuevoIngredienteComponent', () => {
  let component: NuevoIngredienteComponent;
  let fixture: ComponentFixture<NuevoIngredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoIngredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
