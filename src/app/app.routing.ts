import { HomeComponent } from './home/home.component';
import { NuevoIngredienteComponent } from './ingredientes/nuevo-ingrediente/nuevo-ingrediente.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { from } from 'rxjs';

const routes: Routes =[
  { path: 'home', component: HomeComponent},

  { path: 'calendario', component: CalendarioComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: 'admin-layout',
    component: AdminLayoutComponent,
    children: [{
      path: 'admin-layout',
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
