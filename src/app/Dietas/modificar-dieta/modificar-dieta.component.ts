import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-modificar-dieta',
  templateUrl: './modificar-dieta.component.html',
  styleUrls: ['./modificar-dieta.component.css']
})
export class ModificarDietaComponent implements OnInit {

  constructor(private fb: FormBuilder,private http: HttpClient,private authService: AuthService) { }
  dietas;
  ModificarDieta: FormGroup;
  test=2;
  ngOnInit(): void {
    this.cargarDieta(this.test)

    this.ModificarDieta = this.fb.group({
      'nombreDieta': [],
      'tipoDieta': [],
      'PremiumNoPremium': [],
      'image': [],
   
    });
   
    
    }

  cargarDieta(test){
    this.authService.loadDieta(test)
    .pipe(first())
    .subscribe(
      (data) => {
        this.dietas=data;
        console.log(this.dietas);
        this.ModificarDieta.patchValue(data)
      });
  }

}
