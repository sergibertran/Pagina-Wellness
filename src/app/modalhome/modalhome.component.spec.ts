import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalhomeComponent } from './modalhome.component';

describe('ModalhomeComponent', () => {
  let component: ModalhomeComponent;
  let fixture: ComponentFixture<ModalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
