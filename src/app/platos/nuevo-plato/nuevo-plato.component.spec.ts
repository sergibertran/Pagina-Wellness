import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPlatoComponent } from './nuevo-plato.component';

describe('NuevoPlatoComponent', () => {
  let component: NuevoPlatoComponent;
  let fixture: ComponentFixture<NuevoPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
