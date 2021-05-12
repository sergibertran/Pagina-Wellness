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

    { path: '/dashboard', title: 'Menu Principal',  icon: 'dashboard', class: '' },
    { path: '/typography', title: 'Ingredientes',  icon:'library_books', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/TipoIngrediente', title: 'Tipo Ingrediente',  icon:'unarchive', class: 'active-pro' },
    { path: '/NuevoTipoIngediente', title: 'Nuevo Tipo Ingrediente',  icon:'unarchive', class: 'active-pro' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/Platos', title: 'Platos',  icon:'unarchive', class: 'active-pro' },
    { path: '/TipoPlato', title: 'Tipo Platos',  icon:'unarchive', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  username;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username=this.authService.getUser();

    this.menuItems = ROUTES.filter(menuItem => menuItem);
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
