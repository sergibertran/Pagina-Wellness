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

   //Cambiamos el idioma al del navegador cuando recarga la pagina
    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.id = this.router.url.split("/")[2];

  
    this.cargarRutina();
  }

  cargarRutina() {
   
    
    this.authService
      .loadRutinaUn(this.id)
      .pipe(first())
      .subscribe((data) => {
        this.datos = data;
        

      

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
  
    
    this.authService
    .modrut(this.ModificarRutina.value)
    .pipe(first())
    .subscribe((data) => {
      this.router.navigate(['/VerRutina']);

    });



  }

  ModificarDias(){
   this.authService
      .guardarDiasRutina(this.Ranking_modificarArray)
    .pipe(first())
     .subscribe((data) => {
     
     });
    this.MostrarDiasB = false
  }

  MostrarDias() {
    

    this.form = this.fb.group({
      id: this.datos[0].idRutina,
    });

    this.authService
      .cargarTodosDiasRutina(this.form.value)
      .pipe(first())
      .subscribe((data) => {
        this.infoTodosDias = data;
      

        this.Ranking_modificarArray.clear();

        for (let index = 0; index < Object.keys(data).length; index++) {
          this.Ranking_modificarArray.push(
            new FormGroup({
              Ejercicio: new FormControl(this.infoTodosDias[index]["Ejercicio"], [
                Validators.minLength(2),
                Validators.maxLength(15),
                Validators.required,
              ]),
              Ejercicio1: new FormControl(
                this.infoTodosDias[index]["Ejercicio1"],
                [
                  Validators.minLength(2),
                  Validators.maxLength(15),
                  Validators.required,
                ]
              ),
              Ejercicio2: new FormControl(this.infoTodosDias[index]["Ejercicio2"], [
                Validators.email,
                Validators.required,
              ]),
              Ejercicio3: new FormControl(this.infoTodosDias[index]["Ejercicio3"], [
                Validators.email,
                Validators.required,
              ]),
              Ejercicio4: new FormControl(
                this.infoTodosDias[index]["Ejercicio4"],
                [Validators.email, Validators.required]
              ),
              Ejercicio5: new FormControl(this.infoTodosDias[index]["Ejercicio5"], [
                Validators.email,
                Validators.required,
              ]),
              Ejercicio6: new FormControl(
                this.infoTodosDias[index]["Ejercicio6"],
                [Validators.email, Validators.required]
              ), 
              Comentarios: new FormControl(
                this.infoTodosDias[index]["Comentarios"],
                [Validators.email, Validators.required]
              ), 
              idRutina: new FormControl(this.infoTodosDias[index]["idRutina"], [
                Validators.email,
                Validators.required,
              ]),
              idDia: new FormControl(this.infoTodosDias[index]["numDiaRutina"], [
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
