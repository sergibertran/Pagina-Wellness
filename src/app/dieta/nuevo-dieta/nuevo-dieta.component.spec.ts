import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDietaComponent } from './nuevo-dieta.component';

describe('NuevoDietaComponent', () => {
  let component: NuevoDietaComponent;
  let fixture: ComponentFixture<NuevoDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
