import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoingredienteComponent } from './nuevo-tipoingrediente.component';

describe('NuevoTipoingredienteComponent', () => {
  let component: NuevoTipoingredienteComponent;
  let fixture: ComponentFixture<NuevoTipoingredienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoingredienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoingredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
