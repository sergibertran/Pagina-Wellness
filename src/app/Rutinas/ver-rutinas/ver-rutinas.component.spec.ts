import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRutinasComponent } from './ver-rutinas.component';

describe('VerRutinasComponent', () => {
  let component: VerRutinasComponent;
  let fixture: ComponentFixture<VerRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRutinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
