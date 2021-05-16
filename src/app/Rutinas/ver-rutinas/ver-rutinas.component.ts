import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import { IdiomaService } from 'app/services/idioma.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { VerImagenComponent } from 'app/ver-imagen/ver-imagen.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-rutinas',
  templateUrl: './ver-rutinas.component.html',
  styleUrls: ['./ver-rutinas.component.css']
})
export class VerRutinasComponent implements OnInit {
  rutinas;
  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private _servicio:IdiomaService,
    public translate:TranslateService,
    public dialog: MatDialog
    ) { }
  test=2;
  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.cargarRutina(this.test)
  }

  cargarRutina(test){
    this.authService.loadRutina(test)
    .pipe(first())
    .subscribe(
      (data) => {
        this.rutinas=data;
       
        console.log(this.rutinas);
        
     
      });
  }

  Borrar(i){




    Swal.fire({
      title: 'Estas segur@?',
      text: "No podras reviertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.authService
        .borrarRutina(i)
        .subscribe((datos) => {  
          console.log(datos);   
        });

        Swal.fire(
          'Borrada!',
          'La rutina ha sido borrada correctamente.',
          'success'
        )

        window.location.reload();

      }
    })
   }

  EnviarId(datos){

    console.log(datos);
    
  }

  openDialog(arg) {

    console.log(arg);
    
    this.dialog.open(VerImagenComponent, {
      data: arg,

    });
    
    
  }
}