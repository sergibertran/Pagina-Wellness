import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDietaComponent } from './modificar-dieta.component';

describe('ModificarDietaComponent', () => {
  let component: ModificarDietaComponent;
  let fixture: ComponentFixture<ModificarDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
