import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioUsuariosComponent } from './calendario-usuarios.component';

describe('CalendarioUsuariosComponent', () => {
  let component: CalendarioUsuariosComponent;
  let fixture: ComponentFixture<CalendarioUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
