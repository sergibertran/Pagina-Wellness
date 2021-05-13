import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-calendario-modal2',
  templateUrl: './calendario-modal2.component.html',
  styleUrls: ['./calendario-modal2.component.css']
})
export class CalendarioModal2Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {   }


  Tipode;
  ngOnInit(): void {
this.Tipode=this.data.event.title;
   
    
  }

}
