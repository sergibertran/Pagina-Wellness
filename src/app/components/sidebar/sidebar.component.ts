import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/Calendario', title: 'Menu Principal',  icon: 'home', class: '' },
    { path: '/DietasUsuario', title: 'Dietas',  icon:'restaurant_menu', class: '' },
    { path: '/RutinasUsuario', title: 'Rutinas',  icon:'fitness_center', class: '' },


];
export const ROUTESA: RouteInfo[] = [

  { path: '/dashboard', title: 'Menu Principal',  icon: 'home', class: '' },
  { path: '/VerDieta', title: 'Dietas',  icon:'restaurant_menu', class: '' },
  { path: '/VerRutina', title: 'Rutinas',  icon:'fitness_center', class: '' },
  { path: '/Usuarios', title: 'Usuarios',  icon:'manage_accounts', class: '' },
  { path: '/CalendarioUsuarios', title: 'Calendario Usuarios',  icon:'perm_contact_calendar', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItemsAdmin: any[];
  menuItemsUser: any[];
  username;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username=this.authService.getUser();

    this.menuItemsAdmin = ROUTESA.filter(menuItem => menuItem);
    this.menuItemsUser = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  isAdmin(){
    return  this.authService.isAdmin();
   
  }

 
}
