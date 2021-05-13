import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  iduser;
  term: string;
potato=false;
  constructor(private http: HttpClient,private authService: AuthService) { }
  filterData;


 

  ngOnInit(): void {

    

    this.iduser=this.authService.getidUser();
    this.authService.loadUsers(this.iduser)
    .pipe(first())
    .subscribe(
      (data) => {
        this.potato=true;
         this.filterData=data;
      console.log(data);
      // console.log(this.filterData[0][2]);
        
      });
  }

  userClick(){
console.log("test");

  }

  AbrirCalendarioUser(){
    
  }

}
