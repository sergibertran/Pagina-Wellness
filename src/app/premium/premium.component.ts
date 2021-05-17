import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { premium } from 'app/models/premium';
import { AuthService } from "app/services/auth.service";


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
  usuario: any;



  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      numTarjeta: ["", Validators.required],
      expNum: ["", Validators.required],
      cvv: ["", Validators.required],
      cantidad: [1, Validators.required],
      usuario: [this.authService.getidUser()],

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
    this.usuario = this.usuario;
 
  }

onSubmit() {
 
 
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  this.authService
  .guardarpremium(this.registerForm.value)
  .subscribe((datos) => {

    

  });
  this.router.navigate(['/user-profile']);




  

}
}
