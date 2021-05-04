import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  http: any;

  constructor() { }


  load(text) {
    console.log(text);
    
    return this.http.post('http://localhost/load.php/', JSON.stringify(text))
      .pipe(map(any => {
        console.log(any);
        
        return any;
      }));




      

  }
 

}
