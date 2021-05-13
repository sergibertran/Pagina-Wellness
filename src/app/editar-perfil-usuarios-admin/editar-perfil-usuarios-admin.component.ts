import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  ready;
  infoUser;
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
      
      this.authService.loadOwnProfileo(this.idUsuario).subscribe (
        datos => {
          this.ready=true;
       console.log(datos);
       this.infoUser=datos;
       console.log(this.infoUser[0][2]);
       
        }
      )
  

  }

}
