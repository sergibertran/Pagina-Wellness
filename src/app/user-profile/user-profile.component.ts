import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { perfilAlumno } from "app/models/perfilAlumno";
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
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
  constructor(private _servicio:IdiomaService,public translate:TranslateService,private http: HttpClient, private authService: AuthService) {}
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
  imagen;
  ngOnInit() {

    //Cambiamos el idioma al del navegador cuando se recarga
    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }
   
    this.myForm = new FormGroup({
      usuario: new FormControl([0]["usuario"], [
     
      ]),
      nombre: new FormControl([0]["nombre"], [
    
      ]),
      apellidos: new FormControl([0]["apellido"], [
      
      ]),
      correo: new FormControl([0]["correo"], [
    
      ]),
      direccion: new FormControl([0]["Direccion"], [
   
      ]),
      altura: new FormControl([0]["Altura"], [
     
      ]),
      peso: new FormControl([0]["Peso"], [
 
      ]),
      imagen: new FormControl([0]["Imagen"], [
 
      ]),
    });
 

    this.load();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }

  load(){
    this.myForm = new FormGroup({
      usuario: new FormControl([0]["usuario"], [
     
      ]),
      nombre: new FormControl([0]["nombre"], [
    
      ]),
      apellidos: new FormControl([0]["apellido"], [
      
      ]),
      correo: new FormControl([0]["correo"], [
    
      ]),
      direccion: new FormControl([0]["Direccion"], [
   
      ]),
      altura: new FormControl([0]["Altura"], [
     
      ]),
      peso: new FormControl([0]["Peso"], [
 
      ]),
      imagen: new FormControl([0]["Imagen"], [
 
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
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        correo: new FormControl(datos[0]["correo"], [
          Validators.email,
          Validators.required,
        ]),
        direccion: new FormControl(datos[0]["Direccion"], [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        altura: new FormControl(datos[0]["Altura"], [
          Validators.max(300),
          Validators.min(1),
          Validators.required,
        ]),
        peso: new FormControl(datos[0]["Peso"], [
          Validators.max(300),
          Validators.min(1),
          Validators.required,
        ]),
        imagen: new FormControl(datos[0]["Imagen"], [
         
        ]),
      });
   
      this.usuario = this.myForm.controls.usuario.value;
      this.nombre = this.myForm.controls.nombre.value;
      this.apellidos = this.myForm.controls.apellidos.value;
      this.correo = this.myForm.controls.correo.value;
      this.direccion = this.myForm.controls.direccion.value;
      this.altura = this.myForm.controls.altura.value;
      this.peso = this.myForm.controls.peso.value;
      this.imagen = this.myForm.controls.imagen.value;
     
      
    });
    this.ready=true;

  }

  EnviarDatos() {
    this.authService.modificarPerfil(this.myForm.value).subscribe((datos) => {
      this.DatosModal = datos;

      console.log(this.DatosModal);

     this.load();
      
    });
  }
}
