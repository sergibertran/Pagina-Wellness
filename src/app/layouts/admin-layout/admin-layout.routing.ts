import { NuevoTipoPlatoComponent } from './../../platos/tipo-plato/nuevo-tipo-plato/nuevo-tipo-plato.component';
import { TipoPlatoComponent } from './../../platos/tipo-plato/tipo-plato.component';
import { NuevoTipoingredienteComponent } from './../../tipo-ingredientes/nuevo-tipoingrediente/nuevo-tipoingrediente.component';
import { TipoIngredientesComponent } from './../../tipo-ingredientes/tipo-ingredientes.component';
import { NuevoIngredienteComponent } from './../../nuevo-ingrediente/nuevo-ingrediente.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PlatosComponent } from 'app/platos/platos.component';
import { NuevoPlatoComponent } from 'app/platos/nuevo-plato/nuevo-plato.component';
import { DietaComponent } from 'app/dieta/dieta.component';
import { TipoDietaComponent } from 'app/dieta/tipo-dieta/tipo-dieta.component';
import { EjerciciosComponent } from 'app/ejercicios/ejercicios.component';
import { TipoEjercicioComponent } from 'app/ejercicios/tipo-ejercicio/tipo-ejercicio.component';
import { RutinaComponent } from 'app/rutina/rutina.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'NuevoIngrediente',  component: NuevoIngredienteComponent },
    { path: 'TipoIngrediente',  component: TipoIngredientesComponent },
    { path: 'NuevoTipoIngrediente',  component: NuevoTipoingredienteComponent },
    { path: 'Platos',  component: PlatosComponent },
    { path: 'NuevoPlato',  component: NuevoPlatoComponent },
    { path: 'TipoPlato',  component: TipoPlatoComponent },
    { path: 'NuevoTipoPlato',  component: NuevoTipoPlatoComponent },
    { path: 'Dieta',  component: DietaComponent },
    { path: 'TipoDieta',  component: TipoDietaComponent },
    { path: 'Ejercicio',  component: EjerciciosComponent },
    { path: 'TipoEjercicio',  component: TipoEjercicioComponent },
    { path: 'Rutina',  component: RutinaComponent },




];
