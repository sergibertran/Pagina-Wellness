import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaUsuarioComponent } from './rutina-usuario.component';

describe('RutinaUsuarioComponent', () => {
  let component: RutinaUsuarioComponent;
  let fixture: ComponentFixture<RutinaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
