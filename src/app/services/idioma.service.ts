import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  idioma:string
  constructor() { }

  
public getIdioma() {
  console.log(this.idioma+" ESTE ES EL IDIOMA QUE PILLO");
  return this.idioma;
  
  
}

public setIdioma(idiomae:string){
  this.idioma=idiomae

  
}
}

