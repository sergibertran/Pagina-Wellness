import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rutina-usuario',
  templateUrl: './rutina-usuario.component.html',
  styleUrls: ['./rutina-usuario.component.css']
})
export class RutinaUsuarioComponent implements OnInit {

  iduser;
  term: string;
  form: any;
  mostrarDias=false;
  constructor(private http: HttpClient,private authService: AuthService) { }
  filterData;
  rutinas: any;
  ngOnInit(): void {
    this.iduser=this.authService.getNpremium();
    console.log(this.authService.getNpremium());
    if(this.iduser==0){
      console.log('test');

      // this.authService.cargarDatosRutina(this.form.value).subscribe (
      //   datos => {
      //   console.log(datos);
      //   this.rutinas = datos;    
      //   }
      // )
      

    this.authService.loadRutinasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
         this.filterData=data;
    });
  }
  }

  verDias(){

    this.mostrarDias=true;
  }


}
