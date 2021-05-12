import { UsuariosComponent } from './../../usuarios/usuarios.component';
import { CalendarioUsuariosComponent } from './../../calendario-usuarios/calendario-usuarios.component';
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
    { path: 'CalendarioUsuarios',  component: CalendarioUsuariosComponent ,canActivate: [AuthGuard]},
    { path: 'Usuarios',  component: UsuariosComponent ,canActivate: [AuthGuard]},


    

];
