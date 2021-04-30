import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPlatoComponent } from './tipo-plato.component';

describe('TipoPlatoComponent', () => {
  let component: TipoPlatoComponent;
  let fixture: ComponentFixture<TipoPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
