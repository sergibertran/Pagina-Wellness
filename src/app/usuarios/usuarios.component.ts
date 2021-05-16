import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { IdiomaService } from 'app/services/idioma.service';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  iduser;
  term: string;
potato=false;
  constructor(private _servicio:IdiomaService,public translate:TranslateService,private http: HttpClient,private authService: AuthService) { }
  filterData;


 

  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    

    this.iduser=this.authService.getidUser();
    this.authService.loadUsers(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        this.potato=true;
         this.filterData=data;
   
    
        
      });
  }

  userClick(){


  }

  AbrirCalendarioUser(){
    
  }

}
