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


  register(alumno) {
    
    
    return this.http.post(`${environment.apiUrl}/register.php`, JSON.stringify(alumno));
  }

  login(alumno) {
  
    
    return this.http.post(`${environment.apiUrl}/login.php`, JSON.stringify(alumno));
  }

  loadUsers(user) {

    
    return this.http.post(`${environment.apiUrl}/loadUsers.php`, JSON.stringify(user));
  }



  cargarTodosDiasDieta(user){


    return this.http.post(`${environment.apiUrl}/cargarTodosDiasDieta.php`, JSON.stringify(user));
  }

  loadDietaUn(user){


    

    return this.http.post(`${environment.apiUrl}/loadDietasAdminUn.php`, JSON.stringify(user));
  }

  
  loadRutinaUn(user){


    

    return this.http.post(`${environment.apiUrl}/loadRutinasAdminUn.php`, JSON.stringify(user));
  }

  moddiet(user){


    

    return this.http.post(`${environment.apiUrl}/modDiet.php`, JSON.stringify(user));
  }


  modrut(user){

  
    

    return this.http.post(`${environment.apiUrl}/modRut.php`, JSON.stringify(user));
  }

  insertDietas(datos){
  
    

    return this.http.post(`${environment.apiUrl}/insertDietas.php`, JSON.stringify(datos));

  }


  anadirDiasDieta(info){

return this.http.post(`${environment.apiUrl}/anadirDiasDieta.php`, JSON.stringify(info.value));
  }

  guardarDiasDieta(info){

return this.http.post(`${environment.apiUrl}/guardarDiasDieta.php`, JSON.stringify(info.value));

  }

  guardarDiasRutina(info){
  
    return this.http.post(`${environment.apiUrl}/guardarDiasRutina.php`, JSON.stringify(info.value));
    
      }

  insertRutinas(datos){
     

    return this.http.post(`${environment.apiUrl}/insertRutinas.php`, JSON.stringify(datos));

  }


  guardarComentarios(datos){

    return this.http.post(`${environment.apiUrl}/guardarComentarios.php`, JSON.stringify(datos));

  }

  eliminarDia(datos){

    return this.http.post(`${environment.apiUrl}/eliminarDiaCalendario.php`, JSON.stringify(datos));

  }
  borrarRutina(datos){

    
    return this.http.post(`${environment.apiUrl}/deleteRutina.php`, JSON.stringify(datos));

  }

  cargarTodosDiasRutina(user){


    return this.http.post(`${environment.apiUrl}/cargarTodosDiasRutina.php`, JSON.stringify(user));
  }

  loadDieta(user) {


    return this.http.post(`${environment.apiUrl}/loadDietasAdmin.php`, JSON.stringify(user));
  }

  loadDietasUsuario(user){

    return this.http.post(`${environment.apiUrl}/loadDietasUsuario.php`, JSON.stringify(user));
  }

  
  borrarDieta(user){

    
    return this.http.post(`${environment.apiUrl}/deleteDieta.php`, JSON.stringify(user));
  }

  loadDietasUsuarioPremium(user){

    return this.http.post(`${environment.apiUrl}/loadDietasUsuarioPremium.php`, JSON.stringify(user));
  }

  loadRutinasUsuario(user){


    return this.http.post(`${environment.apiUrl}/loadRutinasUsuario.php`, JSON.stringify(user));
  }

  loadRutina(user) {

    return this.http.post(`${environment.apiUrl}/loadRutinasAdmin.php`, JSON.stringify(String));
  }

  getDashboardInfo() {
   
    
    return this.http.post(`${environment.apiUrl}/infoDashboard.php`, JSON.stringify(String));
  }


  loadOwnProfileo(iduser) {
  
    
    return this.http.post(`${environment.apiUrl}/loadProfile.php`, JSON.stringify(iduser));
  }

  cargarEncuestaUser(iduser) {


    return this.http.post(`${environment.apiUrl}/AdminCargarEncuestaUser.php`, JSON.stringify(iduser));
  }
 
  cargarDatosDieta(iduser) {
  
 
    
    return this.http.post(`${environment.apiUrl}/loadDiasDietasAdmin.php`, JSON.stringify(iduser));
  }

  comprovarDietasEnDias(iduser) {
  
    
    return this.http.post(`${environment.apiUrl}/comprovarDietasEnDias.php`, JSON.stringify(iduser));
  }

  comprovarRutinasEnDias(iduser) {
  
  
    
    return this.http.post(`${environment.apiUrl}/comprovarRutinasEnDias.php`, JSON.stringify(iduser));
  }

  cargarDatosRutina(iduser) {
  

    
    return this.http.post(`${environment.apiUrl}/loadDiasRutinasAdmin.php`, JSON.stringify(iduser));
  }


  cargarDatosComentario(datos){

 
    
    return this.http.post(`${environment.apiUrl}/loadComentario.php`, JSON.stringify(datos));

  }


  obtenerDias(datos){


    
    return this.http.post(`${environment.apiUrl}/anadirDietaCalendario.php`, JSON.stringify(datos));

  }

  modificarPerfil(datos){


    
    return this.http.post(`${environment.apiUrl}/modificarPerfil.php`, JSON.stringify(datos));

  }
 

  guardarpremium(datos){


    
    return this.http.post(`${environment.apiUrl}/guardarpremium.php`, JSON.stringify(datos));

  }

  obtenerDiasRutina(datos){


    
    return this.http.post(`${environment.apiUrl}/anadirRutinaCalendario.php`, JSON.stringify(datos));

  }

  modificarPwd(iduser){
   
    
    return this.http.post(`${environment.apiUrl}/modificarPwd.php`, JSON.stringify(iduser));
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

getNpremium() {
  return localStorage.getItem('Premium');

}

GuardarEncuesta(user) {    
  return this.http.post(`${environment.apiUrl}/guardarEncuesta.php`, JSON.stringify(user));
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('iDUser');
    localStorage.removeItem('usernameUser');
    localStorage.removeItem('Premium');
    this.currentUserSubject.next(null);
  }


}
