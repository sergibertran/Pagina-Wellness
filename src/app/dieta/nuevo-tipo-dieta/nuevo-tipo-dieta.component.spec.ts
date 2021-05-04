import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoDietaComponent } from './nuevo-tipo-dieta.component';

describe('NuevoTipoDietaComponent', () => {
  let component: NuevoTipoDietaComponent;
  let fixture: ComponentFixture<NuevoTipoDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
