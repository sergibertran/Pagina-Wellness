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
  constructor(private http: HttpClient,private authService: AuthService) { }
  filterData;
  ngOnInit(): void {
    this.iduser=this.authService.getNpremium();
    console.log(this.iduser);
    if(this.iduser==0){
    this.authService.loadRutinasUsuario(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
         this.filterData=data;
    });
  }
  }

}
