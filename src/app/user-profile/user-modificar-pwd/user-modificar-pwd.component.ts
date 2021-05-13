import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { perfilAlumno } from 'app/models/perfilAlumno';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-modificar-pwd',
  templateUrl: './user-modificar-pwd.component.html',
  styleUrls: ['./user-modificar-pwd.component.css']
})
export class UserModificarPwdComponent implements OnInit {
  idusuario;
  constructor(private http: HttpClient,private authService: AuthService) { }
  perfilalumno;
  myForm;
  usuario;
  ready;
  DatosModal;
  pwdActual;
  pwdNuevaRepetida;

  ngOnInit(): void {
    this.idusuario=this.authService.getidUser();
    this.authService.loadOwnProfileo(this.idusuario).subscribe (
      datos => {
        this.DatosModal=datos[0];
     console.log(datos);
     datos[0]['usuario'];
     console.log(datos[0]['usuario'])


    this.myForm = new FormGroup(
      {
        pwdActual: new FormControl((datos[0]['pwdActual']), [
          Validators.email,
          Validators.required,
        ]),
        pwdNueva: new FormControl((datos[0]['pwdNueva']), [
          Validators.email,
          Validators.required,
        ]),
        pwdNuevaRepetida: new FormControl((datos[0]['pwdNuevaRepetida']), [
          Validators.email,
          Validators.required,
        ]),
      }

      );
      this.ready=true;
      this.usuario=this.myForm.controls.usuario.value;
      this.pwdActual=this.myForm.controls.usuario.value;
      this.pwdNuevaRepetida=this.myForm.controls.usuario.value;

     
        }
      )
  
    }
    EnviarDatos() {  
   
  console.log(this.myForm.value);
  
  
    }
  
  }

  


