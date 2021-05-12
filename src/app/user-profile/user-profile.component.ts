import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient,private authService: AuthService) { }

  ngOnInit() {

    this.authService.loadOwnProfile().subscribe (
      datos => {
     console.log(datos);
     
      }
    )

  }

}
