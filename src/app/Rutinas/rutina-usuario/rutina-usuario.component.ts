import { MatDialog } from '@angular/material/dialog';
import { VerImagenComponent } from './../../ver-imagen/ver-imagen.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rutina-usuario',
  templateUrl: './rutina-usuario.component.html',
  styleUrls: ['./rutina-usuario.component.css']
})
export class RutinaUsuarioComponent implements OnInit {

  iduser;
  term: string;
  form: any;
  todosDias;
  mostrarDias=false;
  i=0;

  constructor(public dialog: MatDialog,private _servicio:IdiomaService,public translate:TranslateService, private http: HttpClient,private authService: AuthService,private fb: FormBuilder) { }
  filterData;
  rutinas: any;
  ngOnInit(): void {

    //Cambiamos el idioma al del navegador en el caso de que recarge la pagina
    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }
    this.iduser=this.authService.getNpremium();

    if(this.iduser==0){
  

   

    this.authService.loadRutinasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
       
         this.filterData=data;
    });
  }
  }

  verDias(i){
    this.mostrarDias=true;


    this.form = this.fb.group({
      'id': this.filterData[i]['idRutina'],
    });



    this.authService.cargarTodosDiasRutina(this.form.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.todosDias=data;
    
         


         
    });
    this.i++;
    if(this.i%2!=0){
      this.mostrarDias=true;
    }else {
      this.mostrarDias=false;
    }


  }
  close(){
    this.mostrarDias=false;
    this.i=0;
    
  }
  openDialog(arg) {


    
    this.dialog.open(VerImagenComponent, {
      data: arg,

    });
    
    
  }

}
