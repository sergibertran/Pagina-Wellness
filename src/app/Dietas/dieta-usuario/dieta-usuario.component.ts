import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import { first } from 'rxjs/operators';
import { VerImagenComponent } from 'app/ver-imagen/ver-imagen.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dieta-usuario',
  templateUrl: './dieta-usuario.component.html',
  styleUrls: ['./dieta-usuario.component.css']
})
export class DietaUsuarioComponent implements OnInit {
  mostrarDias=false;
  iduser;
  term: string;
  i=0;
  dietas: any;
  form: any;
  constructor(public dialog: MatDialog,private _servicio:IdiomaService,public translate:TranslateService, private http: HttpClient,private authService: AuthService, private fb: FormBuilder) { }
  filterData;
  todosDias;

  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.iduser=this.authService.getNpremium();
    console.log(this.iduser);

    // this.authService.cargarDatosDieta(this.form.value).subscribe (
    //   datos => {
    //   console.log(datos);
    //   this.dietas = datos;  
    //   }
    // )

    if(this.iduser==0){
      this.authService.loadDietasUsuario(this.iduser)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
           this.filterData=data;


           
      });
    }

    
  }

  verDias(i){
   console.log(i);
   


    this.form = this.fb.group({
      'id': this.filterData[i]['idDieta'],
    });
console.log(this.form);


    this.authService.cargarTodosDiasDieta(this.form.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.todosDias=data;
        console.log(data);
         


         
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

  userClick(){


  }
  openDialog(arg) {

    console.log(arg);
    
    this.dialog.open(VerImagenComponent, {
      data: arg,

    });
    
    
  }

}