import { Component, OnInit } from '@angular/core';
import { diasdieta } from 'app/models/diasdieta';

@Component({
  selector: 'app-add-dieta',
  templateUrl: './add-dieta.component.html',
  styleUrls: ['./add-dieta.component.css']
})
export class AddDietaComponent implements OnInit {

  constructor() { }

 Dias:boolean=false
 CDias:boolean=true
 DiasDieta:diasdieta[]=[new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta()]
  ngOnInit(): void {
  }

  AddDia(){

    this.Dias=true
    this.CDias=false
    
  }
  CerrarDia(){

    this.Dias=false
    this.CDias=true
    
  }

  MostrarDias(){
    console.log(this.DiasDieta);
    
  }
}
