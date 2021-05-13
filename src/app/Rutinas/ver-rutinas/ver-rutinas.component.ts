import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ver-rutinas',
  templateUrl: './ver-rutinas.component.html',
  styleUrls: ['./ver-rutinas.component.css']
})
export class VerRutinasComponent implements OnInit {
  rutinas;
  constructor(private http: HttpClient,private authService: AuthService) { }

  ngOnInit(): void {

    this.cargarRutina();
  }



  cargarRutina(){
    this.authService.loadRutina()
    .pipe(first())
    .subscribe(
      (data) => {
        this.rutinas=data;
    
     
      });
  }

}
