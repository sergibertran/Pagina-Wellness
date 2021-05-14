import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiaRutinaComponent } from './add-dia-rutina.component';

describe('AddDiaRutinaComponent', () => {
  let component: AddDiaRutinaComponent;
  let fixture: ComponentFixture<AddDiaRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiaRutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiaRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
