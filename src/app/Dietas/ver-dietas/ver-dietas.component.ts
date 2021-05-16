import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { VerImagenComponent } from 'app/ver-imagen/ver-imagen.component';
@Component({
  selector: 'app-ver-dietas',
  templateUrl: './ver-dietas.component.html',
  styleUrls: ['./ver-dietas.component.css']
})
export class VerDietasComponent implements OnInit {
dietas;
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

    this.cargarDieta(this.test)
  }

  cargarDieta(test){
    this.authService.loadDieta(test)
    .pipe(first())
    .subscribe(
      (data) => {
        this.dietas=data;
       console.log(this.dietas);
       
     
      });
  }

  Borrar(i){

    console.log(i);


    
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
        .borrarDieta(i)
        .subscribe((datos) => {  
          console.log(datos);   
        });
        Swal.fire(
          'Borrada!',
          'La dieta ha sido borrada correctamente.',
          'success'
        )
        window.location.reload();
        this.router.navigate(['/VerDieta']);

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
