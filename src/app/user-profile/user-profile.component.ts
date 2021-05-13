import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
idusuario;
  constructor(private http: HttpClient,private authService: AuthService) { }

  ngOnInit() {
    this.idusuario=this.authService.getidUser();
    this.authService.loadOwnProfileo(this.idusuario).subscribe (
      datos => {
     console.log(datos);
     
      }
    )

  }
  isAdmin(){
    return  this.authService.isAdmin();
   
  }

}
