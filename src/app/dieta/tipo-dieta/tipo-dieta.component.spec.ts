import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDietaComponent } from './tipo-dieta.component';

describe('TipoDietaComponent', () => {
  let component: TipoDietaComponent;
  let fixture: ComponentFixture<TipoDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
