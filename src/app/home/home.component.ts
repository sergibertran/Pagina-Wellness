import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
declare let $: any;
import { usuario } from 'app/models/usuario';
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
  constructor( private fb: FormBuilder,private http: HttpClient,private authService: AuthService,private router: Router) {
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
    this.login();

  }

  submitRegisterForm() {

    console.log(this.RegisterForm.value);
    this.register();
   
    
  }
  test(aa){
    $('#modalLoginForm').modal("hide");

    this.router.navigate(['/admin-layout']);
console.log(aa);


  }

 


  login() {

    this.authService.login(this.LoginForm.value).subscribe (
      datos => {
     console.log(datos);
     
     
     localStorage.setItem('user', this.LoginForm.value['username']);
     localStorage.setItem('password', this.LoginForm.value['password']);
     
    
      }
    )
 
    }

  


  register() {

   

    this.authService.register(this.RegisterForm.value).subscribe (
      datos => {
     console.log(datos);
     
      }
    )
    }

}
