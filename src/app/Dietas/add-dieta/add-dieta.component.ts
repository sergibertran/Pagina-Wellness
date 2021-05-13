import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { diasdieta } from 'app/models/diasdieta';

@Component({
  selector: 'app-add-dieta',
  templateUrl: './add-dieta.component.html',
  styleUrls: ['./add-dieta.component.css']
})
export class AddDietaComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  anadirDietaForm: FormGroup;
 Dias:boolean=false
 CDias:boolean=true
 //DiasDieta:diasdieta[]=[new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta()]
  ngOnInit(): void {

    this.anadirDietaForm = this.fb.group({
      'nombreDieta': [''],
      'tipoDieta': [''],
      'PremiumNoPremium': [''],
      'image': [''],
   
    });
  }

  AddDia(){

    this.Dias=true
    this.CDias=false
    
  }
  Submit(){
 
 
  }
  CerrarDia(){

    this.Dias=false
    this.CDias=true
    
  }

  MostrarDias(){

    
  }
}
