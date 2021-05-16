import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor( private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
