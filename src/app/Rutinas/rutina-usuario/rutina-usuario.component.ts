import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
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
  constructor(private http: HttpClient,private authService: AuthService,private fb: FormBuilder) { }
  filterData;
  rutinas: any;
  ngOnInit(): void {
    this.iduser=this.authService.getNpremium();
    console.log(this.authService.getNpremium());
    if(this.iduser==0){
      console.log('test');

      // this.authService.cargarDatosRutina(this.form.value).subscribe (
      //   datos => {
      //   console.log(datos);
      //   this.rutinas = datos;    
      //   }
      // )
      

    this.authService.loadRutinasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
         this.filterData=data;
    });
  }
  }

  verDias(){
    this.mostrarDias=true;


    this.form = this.fb.group({
      'id': this.filterData[0]['idRutina'],
    });
console.log(this.form);


    this.authService.cargarTodosDiasRutina(this.form.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.todosDias=data;
        console.log(data);
         


         
    });


  }


}
