import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  private authService: AuthService,public dialogRef: MatDialogRef<CalendarioModal2Component>) {   }


  Tipode;
  ngOnInit(): void {

    
this.Tipode=this.data.event.title;

   



   this.form = this.fb.group({
    'id': [this.data.event.id],
    'groupId': [this.data.event.groupId],
    'calendarioId': [this.data.event._def.extendedProps.res.idCalendario]
  });

    if(this.data.event.title=='Dieta'){



   this.authService.cargarDatosDieta(this.form.value).subscribe (
    datos => {
   
    this.dietas = datos;
    

   
 

 
    }
  )
}else if(this.data.event.title=='Rutina'){

  this.authService.cargarDatosRutina(this.form.value).subscribe (
    datos => {
   
    this.rutinas = datos;
    

 
    }
  )

}else if(this.data.event.title=='Comentarios'){
  this.form = this.fb.group({
    'id': [this.data.event.id],
    'calendarioId': [this.data.event._def.extendedProps.res.idCalendario]
  });



  this.authService.cargarDatosComentario(this.form.value).subscribe (
    datos => {

    this.comentarios = datos[0].comentario;
    

 
    }
  )


}
  }

borrar(){



this.dialogRef.close();
 this.authService.eliminarDia(this.form.value).subscribe (
   datos => {

   
    

 
   }
  )

}

}
