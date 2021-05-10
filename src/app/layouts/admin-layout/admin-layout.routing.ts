import { IngredientesComponent } from './../../ingredientes/ingredientes/ingredientes.component';
import { NuevoTipoPlatoComponent } from '../../platos/nuevo-tipo-plato/nuevo-tipo-plato.component';
import { TipoPlatoComponent } from './../../platos/tipo-plato/tipo-plato.component';
import { NuevoIngredienteComponent } from '../../ingredientes/nuevo-ingrediente/nuevo-ingrediente.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlatosComponent } from 'app/platos/platos.component';
import { NuevoPlatoComponent } from 'app/platos/nuevo-plato/nuevo-plato.component';
import { DietaComponent } from 'app/dieta/dieta.component';
import { TipoDietaComponent } from 'app/dieta/tipo-dieta/tipo-dieta.component';
import { EjerciciosComponent } from 'app/ejercicios/ejercicios.component';
import { TipoEjercicioComponent } from 'app/ejercicios/tipo-ejercicio/tipo-ejercicio.component';
import { RutinaComponent } from 'app/rutina/rutina.component';
import { NuevoEjercicioComponent } from 'app/ejercicios/nuevo-ejercicio/nuevo-ejercicio.component';
import { NuevoTipoEjercicioComponent } from 'app/ejercicios/nuevo-tipo-ejercicio/nuevo-tipo-ejercicio.component';
import { TipoIngredientesComponent } from 'app/ingredientes/tipo-ingredientes/tipo-ingredientes.component';
import { NuevoDietaComponent } from 'app/dieta/nuevo-dieta/nuevo-dieta.component';
import { NuevaRutinaComponent } from 'app/rutina/nueva-rutina/nueva-rutina.component';
import { TipoRutinaComponent } from 'app/rutina/tipo-rutina/tipo-rutina.component';
import { NuevaTipoRutinaComponent } from 'app/rutina/nueva-tipo-rutina/nueva-tipo-rutina.component';
import { NuevoTipoIngredientesComponent } from 'app/ingredientes/nuevo-tipo-ingredientes/nuevo-tipo-ingredientes.component';
import { NuevoTipoDietaComponent } from 'app/dieta/nuevo-tipo-dieta/nuevo-tipo-dieta.component';
import { CalendarioComponent } from 'app/calendario/calendario.component';
import { EnquestaComponent } from 'app/enquesta/enquesta.component';
import { AuthGuard } from 'app/_helpers/auth.guard';
import { AdminGuard } from 'app/_helpers/admin.guard';
import { PremiumComponent } from 'app/premium/premium.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent ,canActivate: [AuthGuard]},
    { path: 'Ingredientes',   component: IngredientesComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoIngrediente',  component: NuevoIngredienteComponent ,canActivate: [AuthGuard]},
    { path: 'TipoIngrediente',  component: TipoIngredientesComponent ,canActivate: [AuthGuard]},
    { path: 'Platos',  component: PlatosComponent ,canActivate: [AuthGuard]},
    { path: 'Calendario',  component: CalendarioComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoPlato',  component: NuevoPlatoComponent ,canActivate: [AuthGuard]},
    { path: 'TipoPlato',  component: TipoPlatoComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoTipoPlato',  component: NuevoTipoPlatoComponent ,canActivate: [AuthGuard]},
    { path: 'Dieta',  component: DietaComponent ,canActivate: [AuthGuard]},
    { path: 'TipoDieta',  component: TipoDietaComponent ,canActivate: [AuthGuard]},
    { path: 'Ejercicio',  component: EjerciciosComponent,canActivate: [AuthGuard] },
    { path: 'TipoEjercicio',  component: TipoEjercicioComponent ,canActivate: [AuthGuard]},
    { path: 'Rutina',  component: RutinaComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoEjercicio',  component: NuevoEjercicioComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoTipoEjercicio',  component: NuevoTipoEjercicioComponent,canActivate: [AuthGuard] },
    { path: 'NuevoDieta',  component: NuevoDietaComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoTipoDieta',  component: NuevoTipoDietaComponent ,canActivate: [AuthGuard]},
    { path: 'NuevaRutina',  component: NuevaRutinaComponent ,canActivate: [AuthGuard]},
    { path: 'TipoRutina',  component: TipoRutinaComponent ,canActivate: [AuthGuard]},
    { path: 'NuevaTipoRutina',  component: NuevaTipoRutinaComponent ,canActivate: [AuthGuard]},
    { path: 'NuevoTipoIngredientes',  component: NuevoTipoIngredientesComponent ,canActivate: [AuthGuard]},
    { path: 'Enquesta',  component: EnquestaComponent ,canActivate: [AuthGuard]},
    { path: 'Premium',  component: PremiumComponent ,canActivate: [AuthGuard]},


    

];
