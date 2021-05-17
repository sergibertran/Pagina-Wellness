import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  http: any;

  constructor() { }


  load(text) {
   

    return this.http.post(`${environment.apiUrl}/load.php/`, JSON.stringify(text))
      .pipe(map(any => {
   
        
        return any;
      }));




      

  }
 

}
