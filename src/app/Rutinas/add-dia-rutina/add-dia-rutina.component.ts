
import { Validators } from '@angular/forms';
import { diasdieta } from './../../models/diasdieta';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
@Component({
  selector: 'app-add-dia-rutina',
  templateUrl: './add-dia-rutina.component.html',
  styleUrls: ['./add-dia-rutina.component.css']
})
export class AddDiaRutinaComponent implements OnInit {

  index;
  mostrarboton:boolean=false
  mostrarboton2:boolean=true
  addDias: FormGroup;
  Dias = new diasdieta(0,0,'','','','','','','');
i:number=null
longitud: number;
  form = this.fb.group({
    lessons:this.fb.array([])
  })

  constructor(private fb: FormBuilder,
     private _servicio:IdiomaService,
    public translate:TranslateService,) { }

  get lessons(){
    return this.form.controls["lessons"] as FormArray
  }
  addLesson(){
    console.log(this.i);
   
    this.longitud = this.lessons.length;
    for (let index = this.index; index < this.longitud; index++) {
      this.lessons.push(
        new FormGroup({
          nombreEquipo: new FormControl('', [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          idUsuario: new FormControl('', [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          nick: new FormControl('', [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          nombre: new FormControl('', [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          apellido: new FormControl('', [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          puntuacion: new FormControl(
            parseInt(''),
            [
              Validators.minLength(2),
              Validators.maxLength(15),
              Validators.required,
            ]
          ),
        })
      );

      this.index++;
    }

    const lessonForm = this.fb.group({
      Desayuno: ['',Validators.required],
      Desayuno2: ['', Validators.required],
      Comida: ['',Validators.required],
      Merienda: ['',Validators.required],
      Merienda2: ['',Validators.required],
      Cena: ['',Validators.required],

    });

    

   
    
 
 
   if(this.i<7){
    this.lessons.push(lessonForm);

    this.i++;
   }
   this.botonadd();
   
 
  }
  deleteLesson(lessonIndex:number){
    this.lessons.removeAt(lessonIndex)
    this.i=this.i-1
    console.log(this.i);
    this.botonadd()

  }
  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

  }

  botonadd(){
  
    console.log(this.lessons.length+' HOLAHOLA');
    
    if(this.lessons.length>0){
    this.mostrarboton=true
    }
  
  if (this.i==0) {
    this.mostrarboton=false
  }

  if(this.lessons.length<7){
    this.mostrarboton2=true
    }

  if(this.lessons.length==7){
    this.mostrarboton2=false
    }
  }
 

 Submit(){

console.log(this.lessons);

  
  

 }



  


   

}
