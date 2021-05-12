import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ver-dietas',
  templateUrl: './ver-dietas.component.html',
  styleUrls: ['./ver-dietas.component.css']
})
export class VerDietasComponent implements OnInit {

  constructor(private http: HttpClient,private authService: AuthService) { }
  test=2;
  ngOnInit(): void {
    this.cargarDieta(this.test)
  }

  cargarDieta(test){
    this.authService.loadDieta(test)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
     
      });
  }

 


}
