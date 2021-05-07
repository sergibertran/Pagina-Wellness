import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalendarioService } from 'app/services/calendario.service';
import { Profile } from '../calendario.component';

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
  data;
  addEventForm: FormGroup;
  selectControl: FormControl = new FormControl();
  selectControlDieta: FormControl = new FormControl();
  selectControlRutina: FormControl = new FormControl();
  selectControlComentarios: FormControl = new FormControl();
  resultadoSelectRutina='';
  resultadoSelectDieta='';
  resultadoSelect;

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
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
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
