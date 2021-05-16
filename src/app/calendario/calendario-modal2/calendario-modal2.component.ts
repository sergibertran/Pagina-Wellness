import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-calendario-modal2',
  templateUrl: './calendario-modal2.component.html',
  styleUrls: ['./calendario-modal2.component.css']
})
export class CalendarioModal2Component implements OnInit {
  form;
  comentarios: any;
  dietas: any;
  rutinas: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder: FormBuilder,
  private http: HttpClient,
  private fb: FormBuilder,
  private authService: AuthService) {   }


  Tipode;
  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.event.id);
 
    
this.Tipode=this.data.event.title;

   


   this.form = this.fb.group({
    'id': [this.data.event.id],
    'groupId': [this.data.event.groupId]
  });
    console.log(this.data.event.title);
    if(this.data.event.title=='Dieta'){



   this.authService.cargarDatosDieta(this.form.value).subscribe (
    datos => {
    console.log(datos);
    this.dietas = datos;
    

   
 

 
    }
  )
}else if(this.data.event.title=='Rutina'){

  this.authService.cargarDatosRutina(this.form.value).subscribe (
    datos => {
    console.log(datos);
    this.rutinas = datos;
    

 
    }
  )

}else if(this.data.event.title=='Comentarios'){
  this.form = this.fb.group({
    'id': [this.data.event.id]
  });

console.log(this.form.value);

  this.authService.cargarDatosComentario(this.form.value).subscribe (
    datos => {
    console.log(datos);
    this.comentarios = datos[0].comentario;
    

 
    }
  )


}
  }

}
