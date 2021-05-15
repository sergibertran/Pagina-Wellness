import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { perfilAlumno } from "app/models/perfilAlumno";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  idusuario;
  submitted = false;
  formBuilder: any;
  constructor(private http: HttpClient, private authService: AuthService) {}
  perfilalumno;
  myForm:FormGroup;
  usuario;
  nombre;
  apellidos;
  direccion;
  correo;
  ready=false;
  DatosModal;
  altura;
  peso;
  ngOnInit() {
   
    this.myForm = new FormGroup({
      usuario: new FormControl([0]["usuario"], [
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.required,
      ]),
      nombre: new FormControl([0]["nombre"], [
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.required,
      ]),
      apellidos: new FormControl([0]["apellido"], [
        Validators.email,
        Validators.required,
      ]),
      correo: new FormControl([0]["correo"], [
        Validators.email,
        Validators.required,
      ]),
      direccion: new FormControl([0]["Direccion"], [
        Validators.email,
        Validators.required,
      ]),
      altura: new FormControl([0]["Altura"], [
        Validators.email,
        Validators.required,
      ]),
      peso: new FormControl([0]["Peso"], [
        Validators.email,
        Validators.required,
      ]),
    });

    this.idusuario = this.authService.getidUser();
    this.authService.loadOwnProfileo(this.idusuario).subscribe((datos) => {
      this.DatosModal = datos[0];

      
      datos[0]["usuario"];
      console.log(datos);

      this.myForm = new FormGroup({
        usuario: new FormControl(datos[0]["usuario"], [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        nombre: new FormControl(datos[0]["nombre"], [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        apellidos: new FormControl(datos[0]["apellido"], [
          Validators.email,
          Validators.required,
        ]),
        correo: new FormControl(datos[0]["correo"], [
          Validators.email,
          Validators.required,
        ]),
        direccion: new FormControl(datos[0]["Direccion"], [
          Validators.email,
          Validators.required,
        ]),
        altura: new FormControl(datos[0]["Altura"], [
          Validators.email,
          Validators.required,
        ]),
        peso: new FormControl(datos[0]["Peso"], [
          Validators.email,
          Validators.required,
        ]),
      });
   
      this.usuario = this.myForm.controls.usuario.value;
      this.nombre = this.myForm.controls.nombre.value;
      this.apellidos = this.myForm.controls.apellidos.value;
      this.correo = this.myForm.controls.correo.value;
      this.direccion = this.myForm.controls.direccion.value;
      this.altura = this.myForm.controls.altura.value;
      this.peso = this.myForm.controls.peso.value;
    });
    this.ready=true;
  }
  isAdmin() {
    return this.authService.isAdmin();
  }

  EnviarDatos() {
    this.authService.modificarPerfil(this.myForm.value).subscribe((datos) => {
      this.DatosModal = datos;
    });
  }
}
