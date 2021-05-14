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
import Swal from "sweetalert2";

@Component({
  selector: "app-user-modificar-pwd",
  templateUrl: "./user-modificar-pwd.component.html",
  styleUrls: ["./user-modificar-pwd.component.css"],
})
export class UserModificarPwdComponent implements OnInit {
  modpwdForm: FormGroup;
  submitted = false;
  pwdActual: string;
  pwdNueva: string;
  pwdNuevaRepetida: string;

  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modpwdForm = this.formBuilder.group({
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
        if (datos["result"] === "ERROR") {
          Swal.fire({
            icon: "error",
            title: datos["result"],
            text: datos["message"],
          });
        } else {
          if (datos != null) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Contraseña modificada.",
              showConfirmButton: false,
              timer: 1500,
            });
            this.router.navigate(["/user-profile"]);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Intentalo mas tarde!",
            });
          }
          console.log(this.modpwdForm.value);
        }
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
