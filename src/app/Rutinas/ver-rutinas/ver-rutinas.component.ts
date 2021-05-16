import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-rutinas',
  templateUrl: './ver-rutinas.component.html',
  styleUrls: ['./ver-rutinas.component.css']
})
export class VerRutinasComponent implements OnInit {
  rutinas;
  constructor(private http: HttpClient,private authService: AuthService) { }
  test=2;
  ngOnInit(): void {
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
      }
    })
   }

  EnviarId(datos){

    console.log(datos);
    
  }
}