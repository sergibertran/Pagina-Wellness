import { Validators } from '@angular/forms';
import { diasdieta } from './../../models/diasdieta';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dias-dieta',
  templateUrl: './add-dias-dieta.component.html',
  styleUrls: ['./add-dias-dieta.component.css']
})
export class AddDiasDietaComponent implements OnInit {

  addDias: FormGroup;
  Dias:diasdieta
i:number=0

  form = this.fb.group({
    lessons:this.fb.array([])
  })
  constructor(private fb: FormBuilder) { }

  get lessons(){
    return this.form.controls["lessons"] as FormArray
  }

  addLesson(){


    const lessonForm = this.fb.group({
      Desayuno: ['',Validators.required],
      Desayuno2: ['pula', Validators.required],
      Comida: ['',Validators.required],
      Merienda: ['',Validators.required],
      Merienda2: ['',Validators.required],
      Cena: ['',Validators.required],

    });
    

   
    
 
 
    this.i++;
   if(this.i<8){
    this.lessons.push(lessonForm);

   }
  
   
 
  }
  deleteLesson(lessonIndex:number){
    this.lessons.removeAt(lessonIndex)

  }
  ngOnInit(): void {
 
  }

 Submit(){
   
 }
  


   
}
