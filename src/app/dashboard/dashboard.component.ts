import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos;
  constructor(private http: HttpClient,private authService: AuthService,) { }




  ngOnInit(){

    this.authService.getDashboardInfo()
    .pipe(first())
    .subscribe(
      (data) => {
      
        this.datos=data;
       
        
      });
 


    }
}
