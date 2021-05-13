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
import { PremiumComponent } from 'app/premium/premium.component';
import { RutinaUsuarioComponent } from 'app/Rutinas/rutina-usuario/rutina-usuario.component';
import { CalendarioUserComponent } from 'app/calendario/calendario-user/calendario-user.component';
import { EditarPerfilUsuariosAdminComponent } from 'app/editar-perfil-usuarios-admin/editar-perfil-usuarios-admin.component';
import { AddDiasDietaComponent } from 'app/Dietas/add-dias-dieta/add-dias-dieta.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent ,canActivate: [AuthGuard]},
    { path: 'Calendario',  component: CalendarioComponent ,canActivate: [AuthGuard]},
    { path: 'Enquesta',  component: EnquestaComponent ,canActivate: [AuthGuard]},
    { path: 'Premium',  component: PremiumComponent ,canActivate: [AuthGuard]},
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
    { path: 'AddDiaDietas',  component: AddDiasDietaComponent ,canActivate: [AuthGuard, AdminGuard]},
    { path: 'DietaUsuario',  component: DietaUsuarioComponent ,canActivate: [AuthGuard, AdminGuard]},
    
    

];
