import { HomeComponent } from './home/home.component';
import { NuevoIngredienteComponent } from './ingredientes/nuevo-ingrediente/nuevo-ingrediente.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { from } from 'rxjs';
import { EnquestaComponent } from './enquesta/enquesta.component';

const routes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'Enquesta',  component: EnquestaComponent },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
