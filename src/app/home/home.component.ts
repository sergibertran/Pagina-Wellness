import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { usuario } from 'app/models/usuario';
declare let $: any;
import Swal from 'sweetalert2';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  LoginForm: FormGroup;
  RegisterForm: FormGroup;
  constructor( private fb: FormBuilder,private http: HttpClient,private authService: AuthService,  private router: Router,) {
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
    console.log('2');
    
  }
// SUBMIT FORMS 
  submitLoginForm() {

    console.log(this.LoginForm.value);
    if (this.LoginForm.value['username']=='admin'){
     
      localStorage.setItem('role', '21232f297a57a5a743894a0e4a801fc3');
    }

    localStorage.setItem('user', this.LoginForm.value['username']);
    localStorage.setItem('password', this.LoginForm.value['password']);
  
    if('admin'==localStorage.getItem('user')){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/Calendario']);
    }
    
   
    this.login();
  }

  submitRegisterForm() {
    console.log(this.RegisterForm.value);

    this.registerAlumno();
   
    
  }


  registerAlumno() {

    // let alumn = new usuario(this.myForm.controls.usuario.value,
    //                        this.myForm.controls.contrasena.value)

    this.authService.register(this.RegisterForm.value).subscribe (
      datos => {
     console.log(datos);
     
      }
    )
    }
    login(){

      this.authService.login(this.LoginForm.value).subscribe (
        datos => {
       console.log(datos);
       
        }
      )


    }



    test(){
      $('#modalLoginForm').modal("hide");

    }

}
