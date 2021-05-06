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
import { NuevaRutinaComponent } from './rutina/nueva-rutina/nueva-rutina.component';
import { TipoRutinaComponent } from './rutina/tipo-rutina/tipo-rutina.component';
import { NuevaTipoRutinaComponent } from './rutina/nueva-tipo-rutina/nueva-tipo-rutina.component';
import { TipoIngredientesComponent } from './ingredientes/tipo-ingredientes/tipo-ingredientes.component';
import { NuevoTipoIngredientesComponent } from './ingredientes/nuevo-tipo-ingredientes/nuevo-tipo-ingredientes.component';
import { EquestaInicialComponent } from './equesta-inicial/equesta-inicial.component';


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
    MatIconModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    NuevaRutinaComponent,
    TipoRutinaComponent,
    NuevaTipoRutinaComponent,
    TipoIngredientesComponent,
    NuevoTipoIngredientesComponent,
    EquestaInicialComponent,
   
    
    
    




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
