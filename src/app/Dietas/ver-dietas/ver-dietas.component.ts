import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ver-dietas',
  templateUrl: './ver-dietas.component.html',
  styleUrls: ['./ver-dietas.component.css']
})
export class VerDietasComponent implements OnInit {
dietas;
  constructor(private _servicio:IdiomaService,public translate:TranslateService, private http: HttpClient,private authService: AuthService) { }
  test=2;
  ngOnInit(): void {
    this.cargarDieta(this.test)
  }

  cargarDieta(test){
    this.authService.loadDieta(test)
    .pipe(first())
    .subscribe(
      (data) => {
        this.dietas=data;
       
     
      });
  }

  Borrar(){
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
        Swal.fire(
          'Borrada!',
          'La dieta ha sido borrada correctamente.',
          'success'
        )
      }
    })
   }

  EnviarId(datos){

    console.log(datos);
    
  }
}
