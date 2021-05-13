import { ModificarDietaComponent } from './../../Dietas/modificar-dieta/modificar-dieta.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';  

import { CalendarioComponent} from 'app/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { EnquestaComponent } from 'app/enquesta/enquesta.component';
import { MatRadioModule } from '@angular/material/radio';
import { CalendarioModalComponent } from 'app/calendario/calendario-modal/calendario-modal.component';
import { CalendarioModal2Component } from 'app/calendario/calendario-modal2/calendario-modal2.component';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from 'app/_helpers/auth.guard';
import { UsuariosComponent } from 'app/usuarios/usuarios.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CalendarioUserComponent } from 'app/calendario/calendario-user/calendario-user.component';
import { VerDietasComponent } from 'app/Dietas/ver-dietas/ver-dietas.component';
import { VerRutinasComponent } from 'app/Rutinas/ver-rutinas/ver-rutinas.component';
import { AddRutinaComponent } from 'app/Rutinas/add-rutina/add-rutina.component';
import { AddDietaComponent } from 'app/Dietas/add-dieta/add-dieta.component';
import { EditarPerfilUsuariosAdminComponent } from 'app/editar-perfil-usuarios-admin/editar-perfil-usuarios-admin.component';
import { AddDiasDietaComponent } from 'app/Dietas/add-dias-dieta/add-dias-dieta.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    FullCalendarModule,
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
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,

  
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CalendarioComponent,
    EnquestaComponent,
    CalendarioModalComponent,
    CalendarioModal2Component,
    UsuariosComponent, 
    CalendarioUserComponent,
    VerDietasComponent,
    VerRutinasComponent,
    AddRutinaComponent,
    AddDietaComponent,
    CalendarioUserComponent,
    EditarPerfilUsuariosAdminComponent,
    AddDiasDietaComponent,
    ModificarDietaComponent
    ],
  providers: [  
    MatDatepickerModule,  
  AuthService, AuthGuard, //Agregamos a los providers el guard],
  ]})

export class AdminLayoutModule {}
