import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoPlatoComponent } from './nuevo-tipo-plato.component';

describe('NuevoTipoPlatoComponent', () => {
  let component: NuevoTipoPlatoComponent;
  let fixture: ComponentFixture<NuevoTipoPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoTipoPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
