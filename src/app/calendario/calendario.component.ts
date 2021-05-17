import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
declare let $: any;
import { CalendarOptions, FullCalendarComponent } from "@fullcalendar/angular";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { CalendarioService } from "app/services/calendario.service";
import { first } from "rxjs/operators";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CalendarioModalComponent } from "./calendario-modal/calendario-modal.component";
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarioModal2Component } from "./calendario-modal2/calendario-modal2.component";
import { BLACK_ON_WHITE_CSS_CLASS } from "@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector";
import { IdiomaService } from "app/services/idioma.service";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.css"],
})
export class CalendarioComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl('2021-05-12T22:00:00.000Z'),
    end: new FormControl()
  });

  /* Add Event Form */
  eventdate: string;
  successdata: any;
  addEventForm: FormGroup;
  submitted = false;
  events = [];
  test;
  Fecha;
  data;
  Profile;
  idUsuario;
  RegisterForm: FormGroup;


  @ViewChild('calendar') calendarComponent: FullCalendarComponent;



  //Add user form actions
  get f() {
    return this.addEventForm.controls;
  }

  constructor(
    private _servicio: IdiomaService,
    public translate: TranslateService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.translate.addLangs(['es', 'en']);

  }

  calendarOptions: CalendarOptions;
  ngOnInit() {
    if (this._servicio.getIdioma() == undefined) {
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
    } else {
      this.translate.use(this._servicio.getIdioma())
    }
   
  this.reload();


  }




  openDialog(arg) {
    arg.idUser = this.idUsuario;
    console.log('abrir');
    console.log(arg);

    const dialogRef = this.dialog.open(CalendarioModalComponent, {
      data: arg,

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('se cierra');
     
      this.events = [];
      this.reload();


    });
  }



  reload() {
    this.idUsuario = localStorage.getItem('iDUser');
    this.RegisterForm = this.fb.group({
      'idUsuario': [this.idUsuario],


    });

    var myFormDataa = new FormData();

    this.http
      .post("http://localhost/load.php/", this.RegisterForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res != null) {

          for (let index = 0; index < Object.keys(res).length; index++) {

            if (res[index].comentarios == "Dieta") {
              this.events.push({
                title: res[index].comentarios,
                date: res[index].fecha,
                color: "#fed9d5",
                textColor: "black",
                res: res[index],

                id: res[index].idDieta,
                groupId: res[index].idDia,
              });
            } else if (res[index].comentarios == "Rutina") {
              this.events.push({
                title: res[index].comentarios,
                date: res[index].fecha,
                color: "#dae5fd",
                textColor: "black",
                res: res[index],
                id: res[index].idRutina,
                groupId: res[index].idDia,
              });
            } else if (res[index].comentarios == "Comentarios") {
              this.events.push({
                title: res[index].comentarios,
                date: res[index].fecha,
                color: "#e7f5d0",
                textColor: "black",
                res: res[index],
                id: res[index].idCalendario,
                groupId: res[index].idDia,
              });
            }
          }
        }

        console.log(this);

        if (this._servicio.getIdioma() == 'es') {
          this.calendarOptions = {

            locale: esLocale,
            initialView: "dayGridMonth",
            dateClick: this.openDialog.bind(this),
            eventClick: this.openDialogInfo.bind(this),
            events: this.events,

          };
         
        } else {
          this.calendarOptions = {


            initialView: "dayGridMonth",
            dateClick: this.openDialog.bind(this),
            eventClick: this.openDialogInfo.bind(this),
            events: this.events,

          };

         
        }

      });

    //Add User form validations
    this.addEventForm = this.formBuilder.group({
      title: [[Validators.required]],
    });


  }



  reloadIdioma(){


    if (this._servicio.getIdioma() == 'es') {
      this.calendarOptions = {

        locale: esLocale,
        initialView: "dayGridMonth",
        dateClick: this.openDialog.bind(this),
        eventClick: this.openDialogInfo.bind(this),
        events: this.events,

      };
      
    } else {
      this.calendarOptions = {


        initialView: "dayGridMonth",
        dateClick: this.openDialog.bind(this),
        eventClick: this.openDialogInfo.bind(this),
        events: this.events,

      };

     
    }
    this.reload();


  }

  openDialogInfo(arg) {
    console.log('aaa');
  
    

    const dialogRef = this.dialog.open(CalendarioModal2Component, {
      data: arg,
    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('se cierra');

      this.events = [];
      this.reload();


    });
  }

  //Show Modal with Forn on dayClick Event
  handleDateClick(arg) {
    this.openDialog(arg);

  }



  //Hide Modal PopUp and clear the form validations
  hideForm() {
    this.addEventForm.patchValue({ title: "" });
    this.addEventForm.get("title").clearValidators();
    this.addEventForm.get("title").updateValueAndValidity();
  }
}

export class Profile {
  constructor(public prName: string) { }
}

