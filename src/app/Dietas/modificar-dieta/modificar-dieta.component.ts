import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ready } from 'jquery';

@Component({
  selector: 'app-modificar-dieta',
  templateUrl: './modificar-dieta.component.html',
  styleUrls: ['./modificar-dieta.component.css']
})
export class ModificarDietaComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient,private authService: AuthService) { }
  dietas;
  ModificarDieta: FormGroup;
  test=2;
  id;
  myForm;
  ready;
  MostrarDiasB:boolean=false
  datos;
  form;
  ArrayDatos=[];
  DatosForm;
  infoTodosDias;
  Ranking_modificarArray = new FormArray([]);
  ngOnInit(): void {


    this.id=this.router.url.split('/')[2];
   
   
    console.log(this.id);
    this.cargarDieta();

    
    

   
    
    }

  cargarDieta(){

    this.authService.loadDieta(this.id)
    .pipe(first())
    .subscribe(
      (data) => {
        this.datos=data;
      console.log(data);
      



      
      this.myForm = new FormGroup(
        {
          nombreDieta: new FormControl((this.datos[0]['NDieta']), [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          tipoDieta: new FormControl((this.datos[0]['TipoDieta']), [
            Validators.minLength(2),
            Validators.maxLength(15),
            Validators.required,
          ]),
          PremiumNoPremium: new FormControl((this.datos[0]['Premium']), [
            Validators.email,
            Validators.required,
          ]),
          Imagen: new FormControl((this.datos[0]['Imagen']), [
            Validators.email,
            Validators.required,
          ]),
        }
  
      );
      this.ready=true;
      });
  }


  Submit(){
    console.log(this.myForm);
    
  }

  MostrarDias(){

    console.log('test');
    console.log(this.datos[0].idDieta);
    
    this.form = this.fb.group({
      'id':  this.datos[0].idDieta,
    });


    this.authService.cargarTodosDiasDieta(this.form.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.infoTodosDias=data;
 
        this.Ranking_modificarArray.clear();
       
        for (let index = 0; index < Object.keys(data).length; index++) {
         
          
            this.Ranking_modificarArray.push(
              new FormGroup({
                Cena: new FormControl((this.infoTodosDias[index]['Cena']), [
                  Validators.minLength(2),
                  Validators.maxLength(15),
                  Validators.required,
                ]),
                Comentarios: new FormControl((this.infoTodosDias[index]['Comentarios']), [
                  Validators.minLength(2),
                  Validators.maxLength(15),
                  Validators.required,
                ]),
                Comida: new FormControl((this.infoTodosDias[index]['Comida']), [
                  Validators.email,
                  Validators.required,
                ]),
                Desayuno: new FormControl((this.infoTodosDias[index]['Desayuno']), [
                  Validators.email,
                  Validators.required,
                ]),
                Desayuno2: new FormControl((this.infoTodosDias[index]['Desayuno2']), [
                  Validators.email,
                  Validators.required,
                ]),
                Merienda: new FormControl((this.infoTodosDias[index]['Merienda']), [
                  Validators.email,
                  Validators.required,
                ]),
                Merienda2: new FormControl((this.infoTodosDias[index]['Merienda2']), [
                  Validators.email,
                  Validators.required,
                ]),
              })
            );

          }

    
        this.MostrarDiasB=true;

    });
   
  }

}
