import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { premium } from 'app/models/premium';


@Component({
  selector: "app-premium",
  templateUrl: "./premium.component.html",
  styleUrls: ["./premium.component.css"],
})
export class PremiumComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  nombre: string;
  numTarjeta: string;
  expNum: string;
  cvv: string;
  cantidad: string;

  premiumModel = new premium("","","","","");

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      numTarjeta: ["", Validators.required],
      expNum: ["", Validators.required],
      cvv: ["", Validators.required],
      cantidad: ["", Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  ModificarValores() {
    this.nombre = this.registerForm.controls.Nombre.value;
    this.numTarjeta = this.registerForm.controls.Nombre.value;
    this.expNum = this.registerForm.controls.Nombre.value;
    this.cvv = this.registerForm.controls.Nombre.value;
    this.cantidad = this.registerForm.controls.Nombre.value;

    this.premiumModel = new premium(this.nombre, this.numTarjeta,this.expNum, this.cvv, this.cantidad);    
      
  }

onSubmit() {
 
  this.ModificarValores()
  console.log(this.premiumModel);
  
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success

  

}
}
