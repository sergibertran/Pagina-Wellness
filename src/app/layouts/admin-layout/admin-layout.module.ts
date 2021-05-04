import { NuevoTipoPlatoComponent } from '../../platos/nuevo-tipo-plato/nuevo-tipo-plato.component';
import { TipoPlatoComponent } from './../../platos/tipo-plato/tipo-plato.component';
import { NuevoPlatoComponent } from './../../platos/nuevo-plato/nuevo-plato.component';
import { PlatosComponent } from './../../platos/platos.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../ingredientes/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NuevoIngredienteComponent } from '../../ingredientes/nuevo-ingrediente/nuevo-ingrediente.component';
import { DietaComponent } from 'app/dieta/dieta.component';
import { TipoDietaComponent } from 'app/dieta/tipo-dieta/tipo-dieta.component';
import { EjerciciosComponent } from 'app/ejercicios/ejercicios.component';
import { TipoEjercicioComponent } from 'app/ejercicios/tipo-ejercicio/tipo-ejercicio.component';
import { RutinaComponent } from 'app/rutina/rutina.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';  
import { NuevoTipoingredienteComponent } from 'app/ingredientes/nuevo-tipoingrediente/nuevo-tipoingrediente.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NuevoIngredienteComponent,
    NuevoTipoingredienteComponent,
    PlatosComponent,
    NuevoPlatoComponent,
    NuevoPlatoComponent,
    TipoPlatoComponent,
    NuevoTipoPlatoComponent,
    DietaComponent,
    TipoDietaComponent,
    EjerciciosComponent,
    TipoEjercicioComponent,
    RutinaComponent,

  ]
})

export class AdminLayoutModule {}
