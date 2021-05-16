import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRutinaComponent } from './modificar-rutina.component';

describe('ModificarRutinaComponent', () => {
  let component: ModificarRutinaComponent;
  let fixture: ComponentFixture<ModificarRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
