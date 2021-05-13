import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalhomeComponent } from 'app/modalhome/modalhome.component';
import { usuario } from 'app/models/usuario';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  gratuito='gratuito';
  cancelo='cancelo';
  asesorarme='asesorarme';
  wellness='wellness';
  LoginForm: FormGroup;
  data;
  alumno = new usuario();
  RegisterForm: FormGroup;

  constructor(  public dialog: MatDialog, private dialogRef: MatDialogRef<LoginRegisterComponent>,private fb: FormBuilder,private http: HttpClient,private authService: AuthService,  private router: Router,) { 
    

  
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
        this.dialogRef.close();
     
      }
    )
    }
    login(){
  
      this.authService.login(this.LoginForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          this.dialogRef.close();
          this.authService.login(data);
          try {
            if (data != null) {
            
              this.router.navigate(['alumno']);
              localStorage.setItem('currentUser', JSON.stringify(data['idUsuario']));
              localStorage.setItem('usernameUser', data['usuario']);
              localStorage.setItem('iDUser', data['idUsuario']);
              localStorage.setItem('role', data['tUsuario']);
              localStorage.setItem('Premium', data['Npremium']);
  
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
  
  







  

 


 