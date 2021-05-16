import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/services/auth.service';
import { IdiomaService } from 'app/services/idioma.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos;
  constructor(private _servicio:IdiomaService,public translate:TranslateService,private http: HttpClient,private authService: AuthService,) {
    
    this.translate.addLangs(['es','en']);
   
   }



  ngOnInit(){
    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }
    this.authService.getDashboardInfo()
    .pipe(first())
    .subscribe(
      (data) => {
      
        this.datos=data;
       
        
      });
 


    }
}
