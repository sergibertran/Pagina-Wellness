import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private calendarioService: CalendarioService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    console.log( this.router.url.split('/')[2]);
    this.idUsuario=this.router.url.split('/')[2];
     
      this.RegisterForm = this.fb.group({
        'idUsuario': [ this.idUsuario],     
      });
  
      var myFormDataa = new FormData();
     
      console.log(this.idUsuario);
      
      this.authService.cargarEncuestaUser(this.idUsuario).subscribe(
        (data) => {
          this.datosEncuesta=data;
          console.log(this.datosEncuesta);

          localStorage.setItem('sexo', this.datosEncuesta[0].Sexo);
          localStorage.setItem('cintura', this.datosEncuesta[0].Cintura);
          localStorage.setItem('cadera', this.datosEncuesta[0].Cadera);
          localStorage.setItem('intolerancia', this.datosEncuesta[0].Intolerancia);
          localStorage.setItem('intoleranciaEx', this.datosEncuesta[0].IntoleranciaEx);
          localStorage.setItem('dieta', this.datosEncuesta[0].Dieta);
          localStorage.setItem('dietaEx', this.datosEncuesta[0].DietaEx);
          localStorage.setItem('lacteos', this.datosEncuesta[0].Lacteos);
          localStorage.setItem('huevos', this.datosEncuesta[0].Huevos);
          localStorage.setItem('fruta', this.datosEncuesta[0].Fruta);
          localStorage.setItem('legumbres', this.datosEncuesta[0].Legumbres);
          localStorage.setItem('carne', this.datosEncuesta[0].Carne);
          localStorage.setItem('pescado', this.datosEncuesta[0].Pescado);
          localStorage.setItem('bolleria', this.datosEncuesta[0].Bolleria);
          localStorage.setItem('alimentosProcesados', this.datosEncuesta[0].AlimentosProcesados);
          localStorage.setItem('comidaRapida', this.datosEncuesta[0].ComidaRapida);
          localStorage.setItem('bebidasAzucarada', this.datosEncuesta[0].BebidasAzucarada);
          localStorage.setItem('bebidasAlcoholicas', this.datosEncuesta[0].BebidasAlcoholicas);
          localStorage.setItem('carneProcesada', this.datosEncuesta[0].CarneProcesada);
          localStorage.setItem('alimentoExeso', this.datosEncuesta[0].AlimentoExeso);

          
          
          this.sexo = localStorage.getItem('sexo')
          this.cintura = localStorage.getItem('cintura')
          this.cadera = localStorage.getItem('cadera')
          this.intolerancia = localStorage.getItem('intolerancia')
          this.intoleranciaEx = localStorage.getItem('intoleranciaEx')
          this.dieta = localStorage.getItem('dieta')
          this.dietaEx = localStorage.getItem('dietaEx')
          this.lacteos = localStorage.getItem('lacteos')
          this.huevos = localStorage.getItem('huevos')
          this.fruta = localStorage.getItem('fruta')
          this.legumbres = localStorage.getItem('legumbres')
          this.carne = localStorage.getItem('carne')
          this.pescado = localStorage.getItem('pescado')
          this.bolleria = localStorage.getItem('bolleria')
          this.alimentosProcesados = localStorage.getItem('alimentosProcesados')
          this.comidaRapida = localStorage.getItem('comidaRapida')
          this.bebidasAzucarada = localStorage.getItem('bebidasAzucarada')
          this.bebidasAlcoholicas = localStorage.getItem('bebidasAlcoholicas')
          this.carneProcesada = localStorage.getItem('carneProcesada')
          this.alimentoExeso = localStorage.getItem('alimentoExeso')





        })

        

      this.authService.loadOwnProfileo(this.idUsuario).subscribe (
        datos => {          
       this.infoUser=datos;
     datos[0]['usuario'];

     this.direccionform=this.infoUser[0].Direccion;
     this.alturaform=this.infoUser[0].Altura;
     this.pesoform=this.infoUser[0].Peso;

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
          Validators.required,
        ]),
        nombre: new FormControl((datos[0]['nombre']), [
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.required,
        ]),
        apellidos: new FormControl((datos[0]['apellido']), [
          Validators.email,
          Validators.required,
        ]),
        correo: new FormControl((datos[0]['correo']), [
          Validators.email,
          Validators.required,
        ]),
        direccion: new FormControl((datos[0]['direccion']), [
          Validators.email,
          Validators.required,
        ]),
        altura: new FormControl((datos[0]['altura']), [
          Validators.email,
          Validators.required,
        ]),
        peso: new FormControl((datos[0]['peso']), [
          Validators.email,
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

  EnviarDatos() {

 
console.log(this.myForm.value);


  }

}




