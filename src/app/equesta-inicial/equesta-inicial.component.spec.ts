import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquestaInicialComponent } from './equesta-inicial.component';

describe('EquestaInicialComponent', () => {
  let component: EquestaInicialComponent;
  let fixture: ComponentFixture<EquestaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquestaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquestaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
