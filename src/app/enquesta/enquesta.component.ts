import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enquesta } from 'app/models/enquesta';

@Component({
  selector: 'app-enquesta',
  templateUrl: './enquesta.component.html',
  styleUrls: ['./enquesta.component.css']
})
export class EnquestaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  enquestaModel = new enquesta("","","","","","","","","","","","","","","","","","","","","","","","","","","","");

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Sexo: ['', Validators.required],
      Email: ['', Validators.required],
      Edad: ['', Validators.required],
      Antecedentes: ['', Validators.required],
      FamBio: ['', Validators.required],
      Peso: ['', Validators.required],
      Altura: ['', Validators.required],
      Cintura: ['', Validators.required],
      Cadera: ['', Validators.required],
      Intolerancia: ['', Validators.required],
      IntoleranciaEx: ['', Validators.required],
      Dieta: ['', Validators.required],
      DietaEx: ['', Validators.required],
      Lacteos: ['', Validators.required],
      Huevos: ['', Validators.required],
      Fruta: ['', Validators.required],
      Legumbres: ['', Validators.required],
      Carne: ['', Validators.required],
      CarneProcesada: ['', Validators.required],
      Pescado: ['', Validators.required],
      Bolleria: ['', Validators.required],
      AlimentosProcesados: ['', Validators.required],
      ComidaRapida: ['', Validators.required],
      BebidasAzucarada: ['', Validators.required],
      BebidasAlcoholicas: ['', Validators.required],
      AlimentoExeso: ['', Validators.required],      
    });
}

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  console.log(this.registerForm);
  

}


}
