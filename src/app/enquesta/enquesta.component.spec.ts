import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquestaComponent } from './enquesta.component';

describe('EnquestaComponent', () => {
  let component: EnquestaComponent;
  let fixture: ComponentFixture<EnquestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
