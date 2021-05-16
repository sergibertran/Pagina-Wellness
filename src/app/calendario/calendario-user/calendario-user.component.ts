import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
declare let $: any;
import { CalendarOptions, FullCalendarComponent } from "@fullcalendar/angular";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { CalendarioService } from "app/services/calendario.service";
import { first } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

import esLocale from '@fullcalendar/core/locales/es';


import { BLACK_ON_WHITE_CSS_CLASS } from "@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector";
import { CalendarioModalComponent } from "../calendario-modal/calendario-modal.component";
import { CalendarioModal2Component } from "../calendario-modal2/calendario-modal2.component";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-calendario-user',
  templateUrl: './calendario-user.component.html',
  styleUrls: ['./calendario-user.component.css']
})
export class CalendarioUserComponent implements OnInit {
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
  infoUser;
  ready;




  //Add user form actions
  get f() {
    return this.addEventForm.controls;
  }
 
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  calendarOptions: CalendarOptions;
  ngOnInit() {
 


    this.reload();
  }

  openDialog(arg) {
    arg.idUser=this.idUsuario;
    console.log('abrir');
   
    const dialogRef  = this.dialog.open(CalendarioModalComponent, {
      data: arg,
    });
    dialogRef.afterClosed().subscribe(result => {
  
      console.log( 'se cierra');
    
      this.events=[];
      this.reload();


    });
  }

  openDialogInfo(arg) {
console.log(arg);

const dialogRef = this.dialog.open(CalendarioModal2Component, {
        data: arg,
      });
      dialogRef.afterClosed().subscribe(result => {
  
        console.log( 'se cierra');
      
        this.events=[];
        this.reload();
  
  
      });
    }




    reload(){
      this.idUsuario=this.router.url.split('/')[2];
   
    this.RegisterForm = this.fb.group({
      'idUsuario': [ this.idUsuario],
    });

    var myFormDataa = new FormData();
   
    
    
    this.authService.loadOwnProfileo(this.idUsuario).subscribe (
      datos => {
        this.ready=true;
     
     this.infoUser=datos;
     
     
      }
    )


    this.http
      .post("http://localhost/load.php/", this.RegisterForm.value)
      .subscribe((res: any) => {
      console.log(res);
      

      if (res!=null){

        for (let index = 0; index < Object.keys(res).length; index++) {
         
          if (res[index].comentarios == "Dieta") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "#fed9d5",
              textColor: "black",
              res: res,
              id: res[index].idDieta,
              groupId: res[index].idDia,
            });
          } else if (res[index].comentarios == "Rutina") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "#dae5fd",
              textColor: "black",
              res: res,
              id: res[index].idRutina,
              groupId: res[index].idDia,
            });
          } else if (res[index].comentarios == "Comentarios") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "#e7f5d0",
              textColor: "black",
              res: res,
              id: res[index].idCalendario,
              groupId: res[index].idDia,
            });
          }
        }
      }
        this.calendarOptions = {
          locale: esLocale,
          initialView: "dayGridMonth",
          dateClick:   this.openDialog.bind(this),
          eventClick:this.openDialogInfo.bind(this),
         
          events: this.events,

        };
      });
      

    //Add User form validations
    this.addEventForm = this.formBuilder.group({
      title: [[Validators.required]],
    });
  
    }

  //Show Modal with Forn on dayClick Event
  handleDateClick(arg) {
  this.openDialog(arg);
  
  }


  borrar() {
    return this.http
      .post("http://localhost/delete.php/", "")
      .subscribe((res: Response) => { });
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

