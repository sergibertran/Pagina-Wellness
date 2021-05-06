import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasClientesComponent } from './dietas-clientes.component';

describe('DietasClientesComponent', () => {
  let component: DietasClientesComponent;
  let fixture: ComponentFixture<DietasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietasClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
