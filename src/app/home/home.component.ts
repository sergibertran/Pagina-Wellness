import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { usuario } from 'app/models/usuario';
import { MatDialog } from "@angular/material/dialog";
declare let $: any;
import Swal from 'sweetalert2';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { ModalhomeComponent } from 'app/modalhome/modalhome.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gratuito='gratuito';
  cancelo='cancelo';
  asesorarme='asesorarme';
  wellness='wellness';
  LoginForm: FormGroup;
  data;
  alumno = new usuario();
  RegisterForm: FormGroup;
  constructor(   public dialog: MatDialog,private fb: FormBuilder,private http: HttpClient,private authService: AuthService,  private router: Router,) {

   // redirect to home if already logged in
   if (this.authService.currentUserValue) {
    this.router.navigate(['/Calendario']);
  }

    this.LoginForm = this.fb.group({
      'username': [''],
      'password': ['']
    });

    this.RegisterForm = this.fb.group({
      'username': [''],
      'email': [''],
      'password': [''],
      'repassword': [''],
   
    });


 

   }

  ngOnInit(): void {
   
    
  }


  openDialogInfo(info) {
    console.log(info);
    
      this.dialog.open(ModalhomeComponent,{
        data: info,
      });
    }
  
// SUBMIT FORMS 
  submitLoginForm() {

  
  
  
    
   
    this.login();
  }

  submitRegisterForm() {


    this.registerAlumno();
   
    
  }


  registerAlumno() {

    // let alumn = new usuario(this.myForm.controls.usuario.value,
    //                        this.myForm.controls.contrasena.value)

    this.authService.register(this.RegisterForm.value).subscribe (
      datos => {

     
      }
    )
    }
    login(){

      this.authService.login(this.LoginForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          
          this.authService.login(data);
          try {
            if (data != null) {
            
              this.router.navigate(['alumno']);
              localStorage.setItem('currentUser', JSON.stringify(data['idUsuario']));
              localStorage.setItem('usernameUser', data['usuario']);
              localStorage.setItem('iDUser', data['idUsuario']);
              localStorage.setItem('role', data['tUsuario']);

              this.router.navigate(['/Calendario']);

            } else{
              throw new Error('An error occurred');
            }
          }
           catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Login incorrecto',
              text: 'Datos introducidos incorrectos, revisa tus datos',
            })
          }
        });








    }




}


