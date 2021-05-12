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
  total:number=59.99;
  precio:number=59.99;

  premiumModel = new premium("","","","","");

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      numTarjeta: ["", Validators.required],
      expNum: ["", Validators.required],
      cvv: ["", Validators.required],
      cantidad: [1, Validators.required],
    });
  }
  


CambiarprecioTotal(){
  this.total=this.registerForm.value.cantidad*this.precio
}

  get f() { return this.registerForm.controls; }

  ModificarValores() {
    this.nombre = this.registerForm.controls.nombre.value;
    this.numTarjeta = this.registerForm.controls.numTarjeta.value;
    this.expNum = this.registerForm.controls.expNum.value;
    this.cvv = this.registerForm.controls.cvv.value;
    this.cantidad = this.registerForm.controls.cantidad.value;

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
