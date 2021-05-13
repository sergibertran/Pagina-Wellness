import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dieta-usuario',
  templateUrl: './dieta-usuario.component.html',
  styleUrls: ['./dieta-usuario.component.css']
})
export class DietaUsuarioComponent implements OnInit {
  iduser;
  term: string;
  constructor(private http: HttpClient,private authService: AuthService) { }
  filterData;

  ngOnInit(): void {
    this.iduser=this.authService.getNpremium();
    console.log(this.iduser);
    
    if(this.iduser==0){
      this.authService.loadDietasUsuario(this.iduser)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
           this.filterData=data;
      });


    }
    
  }

  userClick(){


  }

}