import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { CalendarioService } from 'app/services/calendario.service';

@Component({
  selector: 'app-editar-perfil-usuarios-admin',
  templateUrl: './editar-perfil-usuarios-admin.component.html',
  styleUrls: ['./editar-perfil-usuarios-admin.component.css']
})
export class EditarPerfilUsuariosAdminComponent implements OnInit {
  idUsuario;
  RegisterForm: FormGroup;
  ready=false;
  infoUser;
  perfilalumno;
  myForm;
  usuario;
  nombre;
  apellidos;
  direccion;
  correo;
  DatosModal;
  altura;
  peso;
  datosEncuesta: any;
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    console.log( this.router.url.split('/')[2]);
    this.idUsuario=this.router.url.split('/')[2];
     
      this.RegisterForm = this.fb.group({
        'idUsuario': [ this.idUsuario],     
      });
  
      var myFormDataa = new FormData();
     
      this.authService.cargarEncuestaUser(this.idUsuario).subscribe(
        (data) => {
          this.datosEncuesta=data;
          console.log(this.datosEncuesta);

        })
      
      this.authService.loadOwnProfileo(this.idUsuario).subscribe (
        datos => {
          
       console.log(datos);
       this.infoUser=datos;
     console.log(datos);
     datos[0]['usuario'];
     console.log(datos[0]['usuario']);
     
     this.myForm = new FormGroup(
      {
        usuario: new FormControl((datos[0]['usuario']), [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        nombre: new FormControl((datos[0]['nombre']), [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        apellidos: new FormControl((datos[0]['apellido']), [
          Validators.email,
          Validators.required,
        ]),
        correo: new FormControl((datos[0]['correo']), [
          Validators.email,
          Validators.required,
        ]),
        direccion: new FormControl((datos[0]['direccion']), [
          Validators.email,
          Validators.required,
        ]),
        altura: new FormControl((datos[0]['altura']), [
          Validators.email,
          Validators.required,
        ]),
        peso: new FormControl((datos[0]['peso']), [
          Validators.email,
          Validators.required,
        ]),
      }

    );
  
    
    this.ready=true;
    this.usuario=this.myForm.controls.usuario.value;
    this.nombre=this.myForm.controls.nombre.value;
    this.apellidos=this.myForm.controls.apellidos.value;
    this.correo=this.myForm.controls.correo.value;
    this.direccion=this.myForm.controls.direccion.value;
    this.ready=true;
      }
    )

  }
  isAdmin(){
    return  this.authService.isAdmin();
   
  }

  EnviarDatos() {

 
console.log(this.myForm.value);


  }

}




