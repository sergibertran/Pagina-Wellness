
import { DietaUsuarioComponent } from './../../Dietas/dieta-usuario/dieta-usuario.component';

import { UsuariosComponent } from './../../usuarios/usuarios.component';
import { VerDietasComponent } from './../../Dietas/ver-dietas/ver-dietas.component';
import { VerRutinasComponent } from './../../Rutinas/ver-rutinas/ver-rutinas.component';
import { AddRutinaComponent } from './../../Rutinas/add-rutina/add-rutina.component';
import { AddDietaComponent } from './../../Dietas/add-dieta/add-dieta.component';

import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { CalendarioComponent } from 'app/calendario/calendario.component';
import { EnquestaComponent } from 'app/enquesta/enquesta.component';
import { AuthGuard } from 'app/_helpers/auth.guard';
import { AdminGuard } from 'app/_helpers/admin.guard';

import { RutinaUsuarioComponent } from 'app/Rutinas/rutina-usuario/rutina-usuario.component';
import { CalendarioUserComponent } from 'app/calendario/calendario-user/calendario-user.component';
import { EditarPerfilUsuariosAdminComponent } from 'app/editar-perfil-usuarios-admin/editar-perfil-usuarios-admin.component';

import { ModificarDietaComponent } from 'app/Dietas/modificar-dieta/modificar-dieta.component';
import { UserModificarPwdComponent } from 'app/user-profile/user-modificar-pwd/user-modificar-pwd.component';
import { ModificarRutinaComponent } from 'app/Rutinas/modificar-rutina/modificar-rutina.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent ,canActivate: [AuthGuard]},
    { path: 'Calendario',  component: CalendarioComponent ,canActivate: [AuthGuard]},
    { path: 'Enquesta',  component: EnquestaComponent ,canActivate: [AuthGuard]},
    { path: 'AddDieta',  component: AddDietaComponent ,canActivate: [AuthGuard]},
    { path: 'AddRutina',  component: AddRutinaComponent ,canActivate: [AuthGuard]},
    { path: 'VerRutina',  component: VerRutinasComponent ,canActivate: [AuthGuard]},
    { path: 'VerDieta',  component: VerDietasComponent ,canActivate: [AuthGuard]},
    { path: 'Usuarios',  component: UsuariosComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'DietasUsuario',  component: DietaUsuarioComponent ,canActivate: [AuthGuard]},
    { path: 'RutinasUsuario',  component: RutinaUsuarioComponent ,canActivate: [AuthGuard]},
    { path: 'Usuario',  component: UsuariosComponent ,canActivate: [AuthGuard]},
    { path: 'CalendarioUser/:id',  component: CalendarioUserComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'EditarPerfilUsuariosAdmin/:id',  component: EditarPerfilUsuariosAdminComponent ,canActivate: [AuthGuard, AdminGuard]},

    { path: 'ModificarDieta/:id',  component: ModificarDietaComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'ModificarRutina/:id',  component: ModificarRutinaComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'DietaUsuario',  component: DietaUsuarioComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'ModificarPwd',  component: UserModificarPwdComponent ,canActivate: [AuthGuard]},

    
    
    

];
