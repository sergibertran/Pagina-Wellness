import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-ver-imagen',
  templateUrl: './ver-imagen.component.html',
  styleUrls: ['./ver-imagen.component.css']
})
export class VerImagenComponent implements OnInit {

  imagen:boolean=false
  noimagen:boolean=false
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    
   if(this.data==null){

    this.noimagen=true

   }else{
     this.imagen=true

   }
    
  }

  verdata(){
    
    console.log(this.data);
  }
 

}
