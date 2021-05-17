import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { perfilAlumno } from "app/models/perfilAlumno";
import { AuthService } from "app/services/auth.service";
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import Swal from "sweetalert2";

@Component({
  selector: "app-user-modificar-pwd",
  templateUrl: "./user-modificar-pwd.component.html",
  styleUrls: ["./user-modificar-pwd.component.css"],
})
export class UserModificarPwdComponent implements OnInit {
  modpwdForm: FormGroup;
  hide = true;
  hide2 = true;
  hide3 = true;
  submitted = false;
  pwdActual: string;
  pwdNueva: string;
  pwdNuevaRepetida: string;

  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private _servicio:IdiomaService,
    public translate:TranslateService,
  ) {}

  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.modpwdForm = this.formBuilder.group({
      idUser: [this.authService.getidUser()],
      pwdActual: ["", Validators.required],
      pwdNueva: ["", Validators.required],
      pwdNuevaRepetida: ["", Validators.required],
    },
    {
      validator: MustMatch('pwdNueva', 'pwdNuevaRepetida'),
    }
    );
  }

  get f() {
    return this.modpwdForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.modpwdForm.invalid) {
      return;
    }

    // display form values on success
    this.authService
      .modificarPwd(this.modpwdForm.value)
      .subscribe((datos) => {
console.log(); ///

        this.router.navigate(['/user-profile']);

      });
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
