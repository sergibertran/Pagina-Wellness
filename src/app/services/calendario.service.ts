import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  http: any;

  constructor() { }


  load(text) {
   
    
    return this.http.post('https://wellnessdaw2.herokuapp.com/load.php/', JSON.stringify(text))
      .pipe(map(any => {
   
        
        return any;
      }));




      

  }
 

}
