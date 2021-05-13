import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiasDietaComponent } from './add-dias-dieta.component';

describe('AddDiasDietaComponent', () => {
  let component: AddDiasDietaComponent;
  let fixture: ComponentFixture<AddDiasDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiasDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiasDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
