import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/services/auth.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos;
  constructor(public translate:TranslateService,private http: HttpClient,private authService: AuthService,) {
    
    this.translate.addLangs(['es','en']);
    this.translate.use(this.translate.getBrowserLang())
   }

   Espanol(){
    this.translate.use('es')
  }
  English(){
    this.translate.use('en')
  }


  ngOnInit(){

    this.authService.getDashboardInfo()
    .pipe(first())
    .subscribe(
      (data) => {
      
        this.datos=data;
       
        
      });
 


    }
}
