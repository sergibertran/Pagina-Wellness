import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietaComponent } from './add-dieta.component';

describe('AddDietaComponent', () => {
  let component: AddDietaComponent;
  let fixture: ComponentFixture<AddDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
