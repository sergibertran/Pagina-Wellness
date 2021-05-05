import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRutinaComponent } from './nueva-rutina.component';

describe('NuevaRutinaComponent', () => {
  let component: NuevaRutinaComponent;
  let fixture: ComponentFixture<NuevaRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
