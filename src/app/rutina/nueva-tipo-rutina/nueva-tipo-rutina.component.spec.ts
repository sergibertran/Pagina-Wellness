import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTipoRutinaComponent } from './nueva-tipo-rutina.component';

describe('NuevaTipoRutinaComponent', () => {
  let component: NuevaTipoRutinaComponent;
  let fixture: ComponentFixture<NuevaTipoRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTipoRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTipoRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
