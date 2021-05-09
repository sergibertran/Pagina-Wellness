import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalendarioService } from 'app/services/calendario.service';
import { Profile } from '../calendario.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
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
  addEventForm: FormGroup;
  selectControl: FormControl = new FormControl();
  selectControlDieta: FormControl = new FormControl();
  selectControlRutina: FormControl = new FormControl();
  selectControlComentarios: FormControl = new FormControl();
  resultadoSelectRutina='';
  resultadoSelectDieta='';
  resultadoSelect;
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
    private http: HttpClient,
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

console.log(this.data.dateStr);

 

    console.log(this.data);
    console.log(this.addEventForm.controls.title.value);
    const titulo = this.addEventForm.controls.title.value;

    this.addEventForm = this.formBuilder.group({
      title: [titulo],
      fecha: [this.data],
    });

    console.log(this.addEventForm.controls);

    var myFormData = new FormData();

    // Begin assigning parameters
    console.log(this.addEventForm.controls.title.value.prName);

    myFormData.append("title", this.addEventForm.controls.title.value.prName);
    myFormData.append("fecha", this.addEventForm.controls.fecha.value);
    console.log(myFormData);

    return this.http
      .post("http://localhost/save.php/", myFormData)
      .subscribe((res: Response) => {
      
        this.successdata = res;
        if ((this.successdata["data"] = "success")) {

          console.log('works');

        } else {
          console.log('funciona');

        }
      });
  }

  onChange(index) {



    this.lastChecked=index.checked;
console.log(index.checked);

  

}


  mySelectHandlerDieta($event) {
    console.log($event);
    this.resultadoSelectDieta = $event
    console.log(this.resultadoSelect);



  }
  mySelectHandlerRutina($event) {
    console.log($event);
    this.resultadoSelectRutina = $event
    console.log(this.resultadoSelect);



  }


  mySelectHandler($event) {
    console.log($event);
    this.resultadoSelect = $event
    console.log(this.resultadoSelect);
    console.log();
    
console.log(this.range);


  }
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;

    this.Tipos();

  }

  Tipos() {


    if (this.selectedDay = "Dieta") {
      this.dieta = true
      console.log(this.selectedDay);
    }
    else if (this.selectedDay = "Rutina") {
      this.rutina = true
      this.dieta = false
      console.log(this.selectedDay);
    }
    else if (this.selectedDay = "Comentarios") {
      this.rutina = false
      this.dieta = false
      console.log(this.selectedDay);
    }



  }
  

}
