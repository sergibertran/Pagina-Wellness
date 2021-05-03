import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TipoIngredientesComponent } from './tipo-ingredientes/tipo-ingredientes.component';
import { NuevoTipoingredienteComponent } from './tipo-ingredientes/nuevo-tipoingrediente/nuevo-tipoingrediente.component';
import { PlatosComponent } from './platos/platos.component';
import { NuevoPlatoComponent } from './platos/nuevo-plato/nuevo-plato.component';
import { TipoPlatoComponent } from './platos/tipo-plato/tipo-plato.component';
import { NuevoTipoPlatoComponent } from './platos/tipo-plato/nuevo-tipo-plato/nuevo-tipo-plato.component';
import { DietaComponent } from './dieta/dieta.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { RutinaComponent } from './rutina/rutina.component';
import { TipoDietaComponent } from './dieta/tipo-dieta/tipo-dieta.component';
import { TipoEjercicioComponent } from './ejercicios/tipo-ejercicio/tipo-ejercicio.component';



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
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TipoIngredientesComponent
    
    
    




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
