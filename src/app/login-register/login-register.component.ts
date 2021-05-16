import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalhomeComponent } from 'app/modalhome/modalhome.component';
import { usuario } from 'app/models/usuario';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import Swal from 'sweetalert2';
import { ConfirmedValidator } from './confirmed.validator';
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
  Login:FormGroup
  Register:FormGroup
  alumno = new usuario();
  RegisterForm: FormGroup;

  constructor( private _servicio:IdiomaService,public translate:TranslateService, public dialog: MatDialog, private dialogRef: MatDialogRef<LoginRegisterComponent>,private fb: FormBuilder,private http: HttpClient,private authService: AuthService,  private router: Router,) { 
    

    this.Login = new FormGroup({
      username: new FormControl("", [
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.required,
      ])
    });

    this.Register = this.fb.group({
      username: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      password: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      repassword: [null, Validators.required],
      email: ['', [Validators.email, Validators.required]]
    },
    {
      validator: ConfirmedValidator('password', 'repassword')
    }
    );
  






  
  }
  get f(){
    return this.Register.controls;
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
  
    this.authService.register(this.Register.value).subscribe (
      datos => {
        this.dialogRef.close();
     
      }
    )
    }
    login(){
  
      this.authService.login(this.Login.value)
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
            console.log(data['usuario']);
            
            if (data['usuario']=="admin"){
              this.router.navigate(['/dashboard']);
            } else {
              this.router.navigate(['/Calendario']);
  
            } 
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
  
  







  

 


 