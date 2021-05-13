import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilUsuariosAdminComponent } from './editar-perfil-usuarios-admin.component';

describe('EditarPerfilUsuariosAdminComponent', () => {
  let component: EditarPerfilUsuariosAdminComponent;
  let fixture: ComponentFixture<EditarPerfilUsuariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilUsuariosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilUsuariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
