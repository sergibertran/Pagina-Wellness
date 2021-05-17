import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  idioma:string
  constructor() { }

  
public getIdioma() {

  return this.idioma;
  
  
}

public setIdioma(idiomae:string){
  this.idioma=idiomae

  
}
}

