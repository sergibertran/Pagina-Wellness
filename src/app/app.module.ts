import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 



import { HomeComponent } from './home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AuthGuard } from './_helpers/auth.guard';
import { AuthService } from './services/auth.service';
import { PremiumComponent } from './premium/premium.component';
import { DietaUsuarioComponent } from './Dietas/dieta-usuario/dieta-usuario.component';
import { RutinaUsuarioComponent } from './Rutinas/rutina-usuario/rutina-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CalendarioUsuariosComponent } from './calendario-usuarios/calendario-usuarios.component';
import { VerDietasComponent } from './Dietas/ver-dietas/ver-dietas.component';
import { VerRutinasComponent } from './Rutinas/ver-rutinas/ver-rutinas.component';
import { AddRutinaComponent } from './Rutinas/add-rutina/add-rutina.component';
import { AddDietaComponent } from './Dietas/add-dieta/add-dieta.component';




FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    FullCalendarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
   
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    
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
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    PremiumComponent,
    DietaUsuarioComponent,
    RutinaUsuarioComponent,
    CalendarioUsuariosComponent,
    VerDietasComponent,
    VerRutinasComponent,
    AddRutinaComponent,
    AddDietaComponent,

 
 
   
   
    
    
    




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
