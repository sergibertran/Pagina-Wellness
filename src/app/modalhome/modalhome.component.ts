import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modalhome',
  templateUrl: './modalhome.component.html',
  styleUrls: ['./modalhome.component.css']
})
export class ModalhomeComponent implements OnInit {

  constructor(  public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
