import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

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
  addRutina:FormGroup

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
   

    this.addRutina = new FormGroup({
      nombreRutina: new FormControl('', Validators.compose([
        Validators.maxLength(15),Validators.minLength(3),
        Validators.required])),
      img: new FormControl('',Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"))
    });
  }


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
