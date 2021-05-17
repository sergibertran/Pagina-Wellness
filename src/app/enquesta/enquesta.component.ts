import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,CheckboxRequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { enquesta } from 'app/models/enquesta';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-enquesta',
  templateUrl: './enquesta.component.html',
  styleUrls: ['./enquesta.component.css']
})
export class EnquestaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  Nombre: string;
  Apellidos: string;
  Sexo: string;
  Edad: string;
  Email: string;
  Antecedentes: string;
  FamBio: string;
  Peso: string;
  Altura: string;
  Cintura: string;
  Cadera: string;
  Intolerancia: string;
  IntoleranciaEx: string;
  Dieta: string;
  DietaEx: string;
  Lacteos: string;
  Huevos: string;
  Fruta: string;
  Legumbres: string;
  Carne: string;
  CarneProcesada: string;
  Pescado: string;
  Bolleria: string;
  AlimentosProcesados: string;
  ComidaRapida: string;
  BebidasAzucarada: string;
  BebidasAlcoholicas: string;
  AlimentoExeso: string;
  enquestaModel = new enquesta("","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  iduser: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  

  ngOnInit(): void {
    this.iduser= localStorage.getItem('currentUser')
   
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Sexo: [CheckboxRequiredValidator],
      Email: ['', Validators.required,Validators.email],
      Edad: ['', Validators.required],
      Antecedentes: ['', Validators.required],
      FamBio: ['', Validators.required],
      Peso: ['', Validators.required],
      Altura: ['', Validators.required],
      Cintura: ['', Validators.required],
      Cadera: ['', Validators.required],
      Intolerancia: [CheckboxRequiredValidator],
      IntoleranciaEx: [''],
      Dieta: [CheckboxRequiredValidator],
      DietaEx: [''],
      Lacteos: [CheckboxRequiredValidator],
      Huevos: [CheckboxRequiredValidator],
      Fruta: [CheckboxRequiredValidator],
      Legumbres: [CheckboxRequiredValidator],
      Carne: [CheckboxRequiredValidator],
      CarneProcesada: [CheckboxRequiredValidator],
      Pescado: [CheckboxRequiredValidator],
      Bolleria: [CheckboxRequiredValidator],
      AlimentosProcesados: [CheckboxRequiredValidator],
      ComidaRapida: [CheckboxRequiredValidator],
      BebidasAzucarada: [CheckboxRequiredValidator],
      BebidasAlcoholicas: [CheckboxRequiredValidator],
      AlimentoExeso: ['', Validators.required],      
    });
}

get f() { return this.registerForm.controls; }

ModificarValores() {
  this.Nombre = this.registerForm.controls.Nombre.value;
  this.Apellidos = this.registerForm.controls.Apellidos.value;
  this.Sexo = this.registerForm.controls.Sexo.value;
  this.Email = this.registerForm.controls.Email.value;
  this.Edad = this.registerForm.controls.Edad.value;
  this.Antecedentes = this.registerForm.controls.Antecedentes.value;
  this.FamBio = this.registerForm.controls.FamBio.value;
  this.Peso = this.registerForm.controls.Peso.value;
  this.Altura = this.registerForm.controls.Altura.value;
  this.Cintura = this.registerForm.controls.Cintura.value;
  this.Cadera = this.registerForm.controls.Cadera.value;
  this.Intolerancia = this.registerForm.controls.Intolerancia.value;
  this.IntoleranciaEx = this.registerForm.controls.IntoleranciaEx.value;
  this.Dieta = this.registerForm.controls.Dieta.value;
  this.DietaEx = this.registerForm.controls.DietaEx.value;
  this.Lacteos = this.registerForm.controls.Lacteos.value;
  this.Huevos = this.registerForm.controls.Huevos.value;
  this.Fruta = this.registerForm.controls.Fruta.value;
  this.Legumbres = this.registerForm.controls.Legumbres.value;
  this.Carne = this.registerForm.controls.Carne.value;
  this.CarneProcesada = this.registerForm.controls.CarneProcesada.value;
  this.Pescado = this.registerForm.controls.Pescado.value;
  this.Bolleria = this.registerForm.controls.Bolleria.value;
  this.AlimentosProcesados = this.registerForm.controls.AlimentosProcesados.value;
  this.ComidaRapida = this.registerForm.controls.ComidaRapida.value;
  this.BebidasAzucarada = this.registerForm.controls.BebidasAzucarada.value;
  this.BebidasAlcoholicas = this.registerForm.controls.BebidasAlcoholicas.value;
  this.AlimentoExeso = this.registerForm.controls.AlimentoExeso.value;
 
 this.enquestaModel = new enquesta(this.iduser, this.Nombre, this.Apellidos,this.Sexo, this.Email,this.Edad,this.Antecedentes,this.FamBio,this.Peso ,this.Altura
  , this.Cintura,this.Cadera,this.Intolerancia,this.IntoleranciaEx,this.Dieta,this.DietaEx,this.Lacteos,this.Huevos,this.Fruta,this.Legumbres,this.Carne, this.CarneProcesada
  ,this.Pescado,this.Bolleria,this.AlimentosProcesados,this.ComidaRapida, this.BebidasAzucarada ,this.BebidasAlcoholicas,this.AlimentoExeso);

  }

onSubmit() {
 
  this.ModificarValores()
 
  
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }


  // display form values on success
console.log(this.enquestaModel);


this.authService.GuardarEncuesta(this.enquestaModel).subscribe((datos) => {

  this.router.navigate(['/user-profile']);

})

}


}
