import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDietasComponent } from './ver-dietas.component';

describe('VerDietasComponent', () => {
  let component: VerDietasComponent;
  let fixture: ComponentFixture<VerDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDietasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
