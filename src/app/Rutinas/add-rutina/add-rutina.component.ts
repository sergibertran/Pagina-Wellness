import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { IdiomaService } from 'app/services/idioma.service';

@Component({
  selector: 'app-add-rutina',
  templateUrl: './add-rutina.component.html',
  styleUrls: ['./add-rutina.component.css']
})
export class AddRutinaComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  nombreRutina: string;
  tipoRutina: string;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _servicio:IdiomaService,
    public translate:TranslateService,
    ) { }

  ngOnInit(): void {

    if(this._servicio.getIdioma()==undefined){
      this.translate.use(this.translate.getBrowserLang())
      this._servicio.setIdioma(this.translate.getBrowserLang())
  }else{
      this.translate.use(this._servicio.getIdioma())
  }
   
    this.registerForm = this.formBuilder.group({
      'nombreRutina': [''],
      'tipoRutina': [''],
      'PremiumNoPremium': [''],
      'image': [''],
   
    });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  
    // display form values on success
    console.log(this.registerForm.value);
    
    this.authService.insertRutinas(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
        
        this.router.navigate(['/VerRutina']);
   
   
      });
      
  }
}
