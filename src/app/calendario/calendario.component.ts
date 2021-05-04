import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CalendarioService } from 'app/services/calendario.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  /* Add Event Form */
  eventdate: string;
  successdata: any;
  addEventForm: FormGroup;
  submitted = false;

  data;
  //Add user form actions
  get f() { return this.addEventForm.controls; }
  onSubmit() {


    console.log(this.data);
    console.log(this.addEventForm.controls.title.value);
    const titulo = this.addEventForm.controls.title.value;

    this.addEventForm = this.formBuilder.group({
      title: [titulo],
      fecha: [this.data]
    });

    console.log(this.addEventForm.controls);
 

    var myFormData = new FormData();
  
    // Begin assigning parameters
   
       myFormData.append('title', this.addEventForm.controls.title.value);
       myFormData.append('fecha', this.addEventForm.controls.fecha.value);
        console.log(myFormData);

      return this.http.post('http://localhost/save.php/'
        , myFormData).subscribe((res: Response) => {
          $("#myModal").modal("hide");
          this.successdata = res;
          if (this.successdata['data'] = "success") {
            //sweetalert message popup
            Swal.fire({
              title: 'Hurray!!',
              text:" event has been added successfully",
              icon: 'success'
            });
          }
          else {
            //sweetalert error message popup
            Swal.fire({
              title: 'OPPSS!!',
              text: 'sdds',
              icon: 'alert'
            });
          }

        });


    
  }
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private calendarioService: CalendarioService) { }

  calendarOptions: CalendarOptions;
  ngOnInit() {

console.log('test');

var myFormDataa = new FormData();



this.http.post('http://localhost/test.php/'
, myFormDataa).subscribe((res: any) => {
 
console.log(res);


});


  
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
      events: [
        { title: 'event 1', date: '2020-11-05' },
        { title: 'event 2', date: '2020-06-30' }
      ]
    };
    //Add User form validations
    this.addEventForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
  }
  //Show Modal with Forn on dayClick Event
  handleDateClick(arg) {


    $("#myModal").modal("show");
    $(".modal-title, .eventstarttitle").text("");
    $(".modal-title").text("Add Event at : " + arg.dateStr);
    $(".eventstarttitle").text(arg.dateStr);

    this.data = arg.dateStr



  }
  //Hide Modal PopUp and clear the form validations
  hideForm() {
    this.addEventForm.patchValue({ title: "" });
    this.addEventForm.get('title').clearValidators();
    this.addEventForm.get('title').updateValueAndValidity();
  }

  load(){
    console.log('222');
    

   

    
     
    
    
    



  }


}