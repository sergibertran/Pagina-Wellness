import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WindowScrollController } from '@fullcalendar/common';
import { AuthService } from 'app/services/auth.service';
import { CalendarioService } from 'app/services/calendario.service';

@Component({
  selector: 'app-editar-perfil-usuarios-admin',
  templateUrl: './editar-perfil-usuarios-admin.component.html',
  styleUrls: ['./editar-perfil-usuarios-admin.component.css']
})
export class EditarPerfilUsuariosAdminComponent implements OnInit {
  idUsuario;
  RegisterForm: FormGroup;
  ready=false;
  infoUser;
  perfilalumno;
  myForm;
  usuario;
  nombre;
  apellidos;
  direccion;
  correo;
  DatosModal;
  altura;
  peso;
  datosEncuesta: any;
  pepe: any;
  direccionform: any;
  alturaform: any;
  pesoform: any;
  cintura: string;
  cadera: string;
  sexo: string;
  intolerancia: string;
  intoleranciaEx: string;
  dieta: string;
  dietaEx: string;
  lacteos: string;
  huevos: string;
  fruta: string;
  legumbres: string;
  carne: string;
  pescado: string;
  bolleria: string;
  alimentosProcesados: string;
  comidaRapida: string;
  bebidasAzucarada: string;
  bebidasAlcoholicas: string;
  carneProcesada: string;
  alimentoExeso: string;
  lastChecked;
  image: string
  
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.idUsuario=this.router.url.split('/')[2];
     
      this.RegisterForm = this.fb.group({
        'idUsuario': [ this.idUsuario],     
      });
  
      var myFormDataa = new FormData();
     
  
      
      this.authService.cargarEncuestaUser(this.idUsuario).subscribe(
        (data) => {
          this.datosEncuesta=data;
    

          
          this.sexo = this.datosEncuesta[0].Sexo;
          this.cintura = this.datosEncuesta[0].Cintura
          this.cadera = this.datosEncuesta[0].Cadera
          this.intolerancia = this.datosEncuesta[0].Intolerancia
          this.intoleranciaEx = this.datosEncuesta[0].IntoleranciaEx
          this.dieta = this.datosEncuesta[0].Dieta
          this.dietaEx = this.datosEncuesta[0].DietaEx
          this.lacteos = this.datosEncuesta[0].Lacteos
          this.huevos = this.datosEncuesta[0].Huevos
          this.fruta = this.datosEncuesta[0].Fruta
          this.legumbres = this.datosEncuesta[0].Legumbres
          this.carne = this.datosEncuesta[0].Carne
          this.pescado = this.datosEncuesta[0].Pescado
          this.bolleria = this.datosEncuesta[0].Bolleria
          this.alimentosProcesados = this.datosEncuesta[0].AlimentosProcesados
          this.comidaRapida = this.datosEncuesta[0].ComidaRapida
          this.bebidasAzucarada = this.datosEncuesta[0].BebidasAzucarada
          this.bebidasAlcoholicas = this.datosEncuesta[0].BebidasAlcoholicas
          this.carneProcesada = this.datosEncuesta[0].CarneProcesada
          this.alimentoExeso = this.datosEncuesta[0].AlimentoExeso

        })

        

      this.authService.loadOwnProfileo(this.idUsuario).subscribe (
        datos => {        
       
         
       this.infoUser=datos;
     datos[0]['usuario'];

     this.direccionform=this.infoUser[0].Direccion;
     this.alturaform=this.infoUser[0].Altura;
     this.pesoform=this.infoUser[0].Peso;
     this.image=this.infoUser[0].Imagen,

     localStorage.setItem('direccion', this.infoUser[0]['Direccion']);
     localStorage.setItem('peso', this.infoUser[0]['Peso']);
     localStorage.setItem('altura', this.infoUser[0]['Altura']);
     
     this.direccion = localStorage.getItem('direccion')
     this.peso = localStorage.getItem('peso')
     this.altura = localStorage.getItem('altura')

     this.myForm = new FormGroup(
      {
        usuario: new FormControl((datos[0]['usuario']), [
          Validators.minLength(2),
          Validators.maxLength(15),
        
        ]),
        nombre: new FormControl((datos[0]['nombre']), [
          Validators.minLength(2),
          Validators.maxLength(15),
       
        ]),
        apellidos: new FormControl((datos[0]['apellido']), [
          Validators.minLength(1),
          Validators.maxLength(15),
        
        ]),
        correo: new FormControl((datos[0]['correo']), [
          Validators.email,
          Validators.required,
        ]),
        direccion: new FormControl((datos[0]['direccion']), [
          Validators.minLength(1),
          Validators.maxLength(40),
        
        ]),
        altura: new FormControl((datos[0]['altura']), [
          Validators.min(1),
          Validators.max(300),
         
        ]),
        peso: new FormControl((datos[0]['peso']), [
          Validators.min(1),
          Validators.max(300),
        
        ]),
        tUsuario: new FormControl((datos[0]['tUsuario']), [
  
          Validators.required,
        ]),
        
      }
      
    );
  
    
    this.ready=true;
    this.usuario=this.myForm.controls.usuario.value;
    this.nombre=this.myForm.controls.nombre.value;
    this.apellidos=this.myForm.controls.apellidos.value;
    this.correo=this.myForm.controls.correo.value;
    this.direccion=this.myForm.controls.direccion.value;
    this.ready=true;
      }
    )

  }
  isAdmin(){
    return  this.authService.isAdmin();
   
  }

  onChange(index) {
    this.lastChecked = index.checked;
  }

  EnviarDatos() {

    this.authService.modificarPerfil(this.myForm.value).subscribe((datos) => {
      this.DatosModal = datos;

    

      
    });


  }

}




