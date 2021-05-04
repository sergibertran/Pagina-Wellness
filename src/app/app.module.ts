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
import { CalendarioComponent } from './calendario/calendario.component';
import { NuevoEjercicioComponent } from './ejercicios/nuevo-ejercicio/nuevo-ejercicio.component';
import { NuevoTipoEjercicioComponent } from './ejercicios/nuevo-tipo-ejercicio/nuevo-tipo-ejercicio.component';
import { TipoIngredientesComponent } from './ingredientes/tipo-ingredientes/tipo-ingredientes.component';
import { NuevoTipoDietaComponent } from './dieta/nuevo-tipo-dieta/nuevo-tipo-dieta.component';
import { NuevoDietaComponent } from './dieta/nuevo-dieta/nuevo-dieta.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    TipoIngredientesComponent,
    HomeComponent,
    CalendarioComponent,
    NuevoEjercicioComponent,
    NuevoTipoEjercicioComponent,
    NuevoTipoDietaComponent,
    NuevoDietaComponent
    
    
    




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
