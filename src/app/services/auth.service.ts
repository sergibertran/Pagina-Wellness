import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from 'app/models/usuario';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<usuario>;
  public currentUser: Observable<usuario>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): usuario {
    return this.currentUserSubject.value;
  }


  isAdmin() {
    if (localStorage.getItem('role') === "21232f297a57a5a743894a0e4a801fc3") {
      return true;
    } else {
      return false
    }
  }

  register(alumno) {
    console.log(alumno);
    
    return this.http.post(`${environment.apiUrl}/register.php`, JSON.stringify(alumno));
  }

  login(alumno) {
    console.log(alumno);
    
    return this.http.post(`${environment.apiUrl}/register.php`, JSON.stringify(alumno));
  }


}
