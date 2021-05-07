import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
declare let $: any;
import { CalendarOptions } from "@fullcalendar/angular";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { CalendarioService } from "app/services/calendario.service";
import { first } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { CalendarioModalComponent } from "./calendario-modal/calendario-modal.component";
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

  
  





  //Add user form actions
  get f() {
    return this.addEventForm.controls;
  }
 
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog
  ) { }

  calendarOptions: CalendarOptions;
  ngOnInit() {
    console.log("test");

    var myFormDataa = new FormData();

    this.http
      .post("http://localhost/load.php/", myFormDataa)
      .subscribe((res: any) => {
        console.log(res);

        for (let index = 0; index < Object.keys(res).length; index++) {
          console.log(res);

          if (res[index].comentarios == "Dieta") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "red",
              res: res,
              id: res[index].idCalendario,
            });
          } else if (res[index].comentarios == "Rutina") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "blue",
              res: res,
              id: res[index].idCalendario,
            });
          } else if (res[index].comentarios == "Comentarios") {
            this.events.push({
              title: res[index].comentarios,
              date: res[index].fecha,
              color: "green",
              res: res,
              id: res[index].idCalendario,
            });
          }
        }

        this.calendarOptions = {
          initialView: "dayGridMonth",
          dateClick:   this.openDialog.bind(this),
        
          
          eventClick:this.eventClick.bind(this),
          events: this.events,

        };
      });

    //Add User form validations
    this.addEventForm = this.formBuilder.group({
      title: [[Validators.required]],
    });
  }

  openDialog() {
  
    this.dialog.open(CalendarioModalComponent, {
   
    });
  }

  //Show Modal with Forn on dayClick Event
  handleDateClick(arg) {
    $("#myModal").modal("show");
    $(".modal-title, .eventstarttitle").text("");
    $(".modal-title").text("Add Event at : " + arg.dateStr);
    $(".eventstarttitle").text(arg.dateStr);

    this.data = arg.dateStr;
  


console.log(this.Fecha);

    this.range = new FormGroup({
      start: new FormControl(this.data+'T21:00:00.000Z'),
      end: new FormControl()
    });

    
  }



 



 
  eventClick(arg) {
    console.log(arg);
    console.log(arg.event.id);

    console.log(arg.event.startStr);
    if (arg.event.id == 69) {
      $("#calendarModalDieta").modal("show");
      $(".modal-title, .eventstarttitle").text("");
      $(".modal-title").text("Add Event at : " + arg.event.startStr);
      $(".eventstarttitle").text(arg.dateStr);
    } else if (arg.event.id == 73) {
      $("#calendarModalRutina").modal("show");
      $(".modal-title, .eventstarttitle").text("");
      $(".modal-title").text("Add Event at : " + arg.event.startStr);
      $(".eventstarttitle").text(arg.dateStr);
    } else if (arg.event.id == 74) {
      $("#calendarModalComentarios").modal("show");
      $(".modal-title, .eventstarttitle").text("");
      $(".modal-title").text("Add Event at : " + arg.event.startStr);
      $(".eventstarttitle").text(arg.dateStr);
    }


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

