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
  selector: 'app-modificar-rutina',
  templateUrl: './modificar-rutina.component.html',
  styleUrls: ['./modificar-rutina.component.css']
})
export class ModificarRutinaComponent implements OnInit {
  Nrutina: any;
  tipoRutina: any;
  idRutina: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private _servicio:IdiomaService,
    public translate:TranslateService
  ) {}
  Rutinas;
  ModificarRutina: FormGroup;
  test = 2;
  id;
  imagen;
  myForm;
  ready;
  MostrarDiasB: boolean = false;
  datos;
  form;
  ArrayDatos = [];
  DatosForm;
  infoTodosDias;
  Ranking_modificarRutinaArray = new FormArray([]);
  Ranking_modificarArray = new FormArray([]);
  ngOnInit(): void {

    this.ModificarRutina = new FormGroup({
      Nrutina: new FormControl(),
      tipoRutina: new FormControl(),
      imagen: new FormControl()
   });

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.id = this.router.url.split("/")[2];

    console.log(this.id);
    this.cargarRutina();
  }

  cargarRutina() {
    console.log(this.id);
    
    this.authService
      .loadRutinaUn(this.id)
      .pipe(first())
      .subscribe((data) => {
        this.datos = data;
        

        console.log(this.datos);

        this.idRutina= data[0].idRutina;
        this.Nrutina= data[0].Nrutina;
        this.imagen= data[0].imagen;



        
        
        this.ModificarRutina = new FormGroup({
          Nrutina: new FormControl('', Validators.compose([
            Validators.maxLength(15),Validators.minLength(3),
            Validators.required])),
            imagen: new FormControl('',Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"))
        });      

        this.ready = true;
      });
  }

  Submit() {


    this.ModificarRutina.value.idRutina= this.idRutina;
    console.log(this.ModificarRutina.value);
    
    this.authService
    .moddiet(this.ModificarRutina.value)
    .pipe(first())
    .subscribe((data) => {
      this.router.navigate(['/VerRutina']);

    });



  }

  ModificarDias(){
    // this.authService
    //   .guardarDiasDieta(this.Ranking_modificarArray)
    //   .pipe(first())
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    //   this.MostrarDiasB = false
  }

  MostrarDias() {
    console.log("test");
    console.log(this.datos[0].idRutina);

    this.form = this.fb.group({
      id: this.datos[0].idDieta,
    });

    this.authService
      .cargarTodosDiasRutina(this.form.value)
      .pipe(first())
      .subscribe((data) => {
        this.infoTodosDias = data;
        console.log(this.infoTodosDias);

        this.Ranking_modificarArray.clear();

        // for (let index = 0; index < Object.keys(data).length; index++) {
        //   this.Ranking_modificarArray.push(
        //     new FormGroup({
        //       Cena: new FormControl(this.infoTodosDias[index]["Cena"], [
        //         Validators.minLength(2),
        //         Validators.maxLength(15),
        //         Validators.required,
        //       ]),
        //       Comentarios: new FormControl(
        //         this.infoTodosDias[index]["Comentarios"],
        //         [
        //           Validators.minLength(2),
        //           Validators.maxLength(15),
        //           Validators.required,
        //         ]
        //       ),
        //       Comida: new FormControl(this.infoTodosDias[index]["Comida"], [
        //         Validators.email,
        //         Validators.required,
        //       ]),
        //       Desayuno: new FormControl(this.infoTodosDias[index]["Desayuno"], [
        //         Validators.email,
        //         Validators.required,
        //       ]),
        //       Desayuno2: new FormControl(
        //         this.infoTodosDias[index]["Desayuno2"],
        //         [Validators.email, Validators.required]
        //       ),
        //       Merienda: new FormControl(this.infoTodosDias[index]["Merienda"], [
        //         Validators.email,
        //         Validators.required,
        //       ]),
        //       Merienda2: new FormControl(
        //         this.infoTodosDias[index]["Merienda2"],
        //         [Validators.email, Validators.required]
        //       ),
        //       idDieta: new FormControl(this.infoTodosDias[index]["idDIeta"], [
        //         Validators.email,
        //         Validators.required,
        //       ]),
        //       idDia: new FormControl(this.infoTodosDias[index]["numDiaDieta"], [
        //         Validators.email,
        //         Validators.required,
        //       ]),
        //     })
        //   );
        // }

        this.MostrarDiasB = true;
      });
  }
}
