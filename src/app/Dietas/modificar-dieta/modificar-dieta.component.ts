import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
        }
  
      );
      this.ready=true;
      });
  }


  Submit(){
    console.log(this.myForm);
    
  }

  MostrarDias(){
    this.MostrarDiasB=true
  }

}
