import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalendarioService } from 'app/services/calendario.service';
import { Profile } from '../calendario.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-calendario-modal',
  templateUrl: './calendario-modal.component.html',
  styleUrls: ['./calendario-modal.component.css']
})
export class CalendarioModalComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl('2021-05-12T22:00:00.000Z'),
    end: new FormControl()
  });
 
  dieta = false;
  rutina = false;
  minDate: Date;
  maxDate: Date;
  datoFechas: FormGroup;
  filterData;
  addEventForm: FormGroup;
  selectControl: FormControl = new FormControl();
  selectControlDieta: FormControl = new FormControl();
  selectControlRutina: FormControl = new FormControl();
  selectControlComentarios: FormControl = new FormControl();
  resultadoSelectRutina='';
  resultadoSelectDieta='';
  resultadoSelect;
  fechaStart;
  fechaEnd
  iduser;
  checked = true;
  lastChecked = false;
  selectedDay: string = '';
  allProfiles = [
    new Profile("Dieta"),
    new Profile("Rutina"),
    new Profile("Comentarios"),
  ];
  successdata: Response;
  constructor(  private formBuilder: FormBuilder,
    private http: HttpClient, private authService: AuthService,
    
    private calendarioService: CalendarioService,
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {  const currentYear = new Date().getFullYear();
      this.minDate = new Date;
      this.maxDate = new Date(currentYear + 1, 11, 31);}

  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl(this.data.dateStr+'T21:00:00.000Z'),
      end: new FormControl()
    });

    
  }






  onSubmit() {

console.log('test');


console.log(this.range.controls);
console.log(this.range.controls.end.value);

console.log(this.range.controls.start.value);
 

function convertend(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}



this.fechaEnd=convertend(this.range.controls.end.value);
this.fechaStart=(this.range.controls.start.value).split('T')[0];

console.log( this.fechaStart +" y start "+ this.fechaEnd);


this.datoFechas = new FormGroup({
  start: this.fechaEnd,
  end: this.fechaStart
});




this.authService.anadirDietaCalendario();

  


  }

  

  onChange(index) {



    this.lastChecked=index.checked;

  

}


  mySelectHandlerDieta($event) {

    this.resultadoSelectDieta = $event




  }
  mySelectHandlerRutina($event) {

    this.resultadoSelectRutina = $event
 



  }


  mySelectHandler($event) {
 
    this.resultadoSelect = $event


if(this.resultadoSelect=='Dieta'){

  this.iduser=this.authService.getNpremium();
  console.log(this.iduser);
  
  if(this.iduser==0){
    this.authService.loadDietasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
         this.filterData=data;
    });


  }

}else if(this.resultadoSelect=='Rutina'){

  this.iduser=this.authService.getNpremium();
  console.log(this.iduser);
  
  if(this.iduser==0){
    this.authService.loadRutinasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
         this.filterData=data;
    });


  }

}else if (this.resultadoSelect=='Comentarios'){

}



  }
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;

    this.Tipos();

  }

  Tipos() {


    if (this.selectedDay = "Dieta") {
      this.dieta = true
   
    }
    else if (this.selectedDay = "Rutina") {
      this.rutina = true
      this.dieta = false
 
    }
    else if (this.selectedDay = "Comentarios") {
      this.rutina = false
      this.dieta = false
   
    }



  }
  

}
