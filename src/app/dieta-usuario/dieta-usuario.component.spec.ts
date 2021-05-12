import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaUsuarioComponent } from './dieta-usuario.component';

describe('DietaUsuarioComponent', () => {
  let component: DietaUsuarioComponent;
  let fixture: ComponentFixture<DietaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
