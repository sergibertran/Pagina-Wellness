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
    console.log(this.currentUserSubject);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): usuario {
    return this.currentUserSubject.value;
  }


  register(alumno) {
    console.log(alumno);
    
    return this.http.post(`${environment.apiUrl}/register.php`, JSON.stringify(alumno));
  }

  login(alumno) {
    console.log(alumno);
    
    return this.http.post(`${environment.apiUrl}/login.php`, JSON.stringify(alumno));
  }

  loadUsers(user) {

    
    return this.http.post(`${environment.apiUrl}/loadUsers.php`, JSON.stringify(user));
  }

  loadDieta(user) {

    return this.http.post(`${environment.apiUrl}/loadDietasAdmin.php`, JSON.stringify(user));
  }

  loadRutina() {

    return this.http.post(`${environment.apiUrl}/loadRutinasAdmin.php`, JSON.stringify(String));
  }

  getDashboardInfo() {
    console.log('test');
    
    return this.http.post(`${environment.apiUrl}/infoDashboard.php`, JSON.stringify(String));
  }


  loadOwnProfileo(iduser) {
  
    
    return this.http.post(`${environment.apiUrl}/loadProfile.php`, JSON.stringify(iduser));
  }
 


  isLogged() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false
    }
  }

  isAdmin() {
    if (localStorage.getItem('role') === "1") {
      return true;
    } else {
      return false
    }
  }

  getUser() {
      return localStorage.getItem('usernameUser');
  
  }

  getidUser() {
    return localStorage.getItem('iDUser');

}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('iDUser');
    localStorage.removeItem('usernameUser');
    this.currentUserSubject.next(null);
  }


}
