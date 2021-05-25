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
  nombreDieta: any;
  tipoDieta: any;
  idDieta: any;
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
  imagen;
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

    this.ModificarDieta = new FormGroup({
      nombreDieta: new FormControl(),
      tipoDieta: new FormControl(),
      imagen: new FormControl()
   });

   //Cambiamos el idioma al del navegador cuando se recarga la pagina
    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.id = this.router.url.split("/")[2];

    this.cargarDieta();
  }

  cargarDieta() {
  
    
    this.authService
      .loadDietaUn(this.id)
      .pipe(first())
      .subscribe((data) => {
        this.datos = data;
        
        this.idDieta= data[0].idDieta;
        this.nombreDieta= data[0].NDieta;
        this.tipoDieta= data[0].TipoDieta;
        this.imagen= data[0].Imagen;


     

        
        
        this.ModificarDieta = new FormGroup({
          nombreDieta: new FormControl('', Validators.compose([
            Validators.maxLength(15),Validators.minLength(3),
            Validators.required])),
          tipoDieta: new FormControl('', Validators.compose([
            Validators.maxLength(15),Validators.minLength(3),
            Validators.required])),
            imagen: new FormControl('',Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"))
        });      

        this.ready = true;
      });
  }

  Submit() {


    this.ModificarDieta.value.idDieta= this.idDieta;
 
    
    this.authService
    .moddiet(this.ModificarDieta.value)
    .pipe(first())
    .subscribe((data) => {
      this.router.navigate(['/VerDieta']);

    });



  }

  ModificarDias(){

    
    this.authService
      .guardarDiasDieta(this.Ranking_modificarArray)
      .pipe(first())
      .subscribe((data) => {
     
      });
      this.MostrarDiasB = false
  }

  MostrarDias() {
 

    this.form = this.fb.group({
      id: this.datos[0].idDieta,
    });

    this.authService
      .cargarTodosDiasDieta(this.form.value)
      .pipe(first())
      .subscribe((data) => {
        this.infoTodosDias = data;
     

        this.Ranking_modificarArray.clear();

        for (let index = 0; index < Object.keys(data).length; index++) {
          this.Ranking_modificarArray.push(
            new FormGroup({
              Cena: new FormControl(this.infoTodosDias[index]["Cena"], [
      
          
              ]),
              Comentarios: new FormControl(
                this.infoTodosDias[index]["Comentarios"],
                [
               
                ]
              ),
              Comida: new FormControl(this.infoTodosDias[index]["Comida"], [
            
              ]),
              Desayuno: new FormControl(this.infoTodosDias[index]["Desayuno"], [
          
              ]),
              Desayuno2: new FormControl(
                this.infoTodosDias[index]["Desayuno2"],
                []
              ),
              Merienda: new FormControl(this.infoTodosDias[index]["Merienda"], [
            
              ]),
              Merienda2: new FormControl(
                this.infoTodosDias[index]["Merienda2"],
                []
              ),
              idDieta: new FormControl(this.infoTodosDias[index]["idDIeta"], [
     
              ]),
              idDia: new FormControl(this.infoTodosDias[index]["numDiaDieta"], [
        
              ]),
              comentarios: new FormControl(this.infoTodosDias[index]["Comentarios"], [
        
              ]),
            })
          );
        }

        this.MostrarDiasB = true;
      });
  }
}
