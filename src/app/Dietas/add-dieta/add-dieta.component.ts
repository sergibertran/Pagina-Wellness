import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { diasdieta } from 'app/models/diasdieta';
import { AuthService } from 'app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-dieta',
  templateUrl: './add-dieta.component.html',
  styleUrls: ['./add-dieta.component.css']
})
export class AddDietaComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,    
    private _servicio:IdiomaService,
    public translate:TranslateService,) { }
  anadirDietaForm: FormGroup;
 Dias:boolean=false
 CDias:boolean=true
 //DiasDieta:diasdieta[]=[new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta(),new diasdieta()]
  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }

    this.anadirDietaForm = this.fb.group({
      'nombreDieta': [''],
      'tipoDieta': [''],
      'PremiumNoPremium': [''],
      'image': [''],
   
    });
  }

  AddDia(){

    this.Dias=true
    this.CDias=false
    
  }
  Submit(){
 console.log(this.anadirDietaForm.value);
 
 this.authService.insertDietas(this.anadirDietaForm.value)
 .pipe(first())
 .subscribe(
   (data) => {
     console.log(data);
     
     this.router.navigate(['/VerDieta']);


   });
 


  }
  CerrarDia(){

    this.Dias=false
    this.CDias=true
    
  }

  MostrarDias(){

    
  }
}
