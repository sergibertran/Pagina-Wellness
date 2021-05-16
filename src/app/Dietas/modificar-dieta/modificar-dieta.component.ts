import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { IdiomaService } from 'app/services/idioma.service';
import { TranslateService } from '@ngx-translate/core';
import { ready } from "jquery";

@Component({
  selector: "app-modificar-dieta",
  templateUrl: "./modificar-dieta.component.html",
  styleUrls: ["./modificar-dieta.component.css"],
})
export class ModificarDietaComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private _servicio:IdiomaService,
    public translate:TranslateService
  ) {}
  dietas;
  ModificarDieta: FormGroup;
  test = 2;
  id;
  myForm;
  ready;
  MostrarDiasB: boolean = false;
  datos;
  form;
  ArrayDatos = [];
  DatosForm;
  infoTodosDias;
  Ranking_modificarDietaArray = new FormArray([]);
  Ranking_modificarArray = new FormArray([]);
  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.id = this.router.url.split("/")[2];

    console.log(this.id);
    this.cargarDieta();
  }

  cargarDieta() {
    this.authService
      .loadDieta(this.id)
      .pipe(first())
      .subscribe((data) => {
        this.datos = data;
        console.log(data);

        this.Ranking_modificarDietaArray.clear();

        for (let index = 0; index < Object.keys(data).length; index++) {
          this.Ranking_modificarDietaArray.push(
            new FormGroup({
              nombreDieta: new FormControl(this.datos[index]["NDieta"], [
                Validators.minLength(2),
                Validators.maxLength(15),
                Validators.required,
              ]),
              tipoDieta: new FormControl(this.datos[index]["TipoDieta"], [
                Validators.minLength(2),
                Validators.maxLength(15),
                Validators.required,
              ]),
              PremiumNoPremium: new FormControl(this.datos[index]["Premium"], [
                Validators.email,
                Validators.required,
              ]),
              Imagen: new FormControl(this.datos[index]["Imagen"], [
                Validators.email,
                Validators.required,
              ]),
            })
          );
        }

        this.ready = true;
      });
  }

  Submit() {
    console.log(this.Ranking_modificarArray.controls);

    this.authService
      .guardarDiasDieta(this.Ranking_modificarArray)
      .pipe(first())
      .subscribe((data) => {
        console.log(data);
      });
  }

  MostrarDias() {
    console.log("test");
    console.log(this.datos[0].idDieta);

    this.form = this.fb.group({
      id: this.datos[0].idDieta,
    });

    this.authService
      .cargarTodosDiasDieta(this.form.value)
      .pipe(first())
      .subscribe((data) => {
        this.infoTodosDias = data;
        console.log(this.infoTodosDias);

        this.Ranking_modificarArray.clear();

        for (let index = 0; index < Object.keys(data).length; index++) {
          this.Ranking_modificarArray.push(
            new FormGroup({
              Cena: new FormControl(this.infoTodosDias[index]["Cena"], [
                Validators.minLength(2),
                Validators.maxLength(15),
                Validators.required,
              ]),
              Comentarios: new FormControl(
                this.infoTodosDias[index]["Comentarios"],
                [
                  Validators.minLength(2),
                  Validators.maxLength(15),
                  Validators.required,
                ]
              ),
              Comida: new FormControl(this.infoTodosDias[index]["Comida"], [
                Validators.email,
                Validators.required,
              ]),
              Desayuno: new FormControl(this.infoTodosDias[index]["Desayuno"], [
                Validators.email,
                Validators.required,
              ]),
              Desayuno2: new FormControl(
                this.infoTodosDias[index]["Desayuno2"],
                [Validators.email, Validators.required]
              ),
              Merienda: new FormControl(this.infoTodosDias[index]["Merienda"], [
                Validators.email,
                Validators.required,
              ]),
              Merienda2: new FormControl(
                this.infoTodosDias[index]["Merienda2"],
                [Validators.email, Validators.required]
              ),
              idDieta: new FormControl(this.infoTodosDias[index]["idDIeta"], [
                Validators.email,
                Validators.required,
              ]),
              idDia: new FormControl(this.infoTodosDias[index]["numDiaDieta"], [
                Validators.email,
                Validators.required,
              ]),
            })
          );
        }

        this.MostrarDiasB = true;
      });
  }
}
