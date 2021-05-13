import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModificarPwdComponent } from './user-modificar-pwd.component';

describe('UserModificarPwdComponent', () => {
  let component: UserModificarPwdComponent;
  let fixture: ComponentFixture<UserModificarPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModificarPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModificarPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
