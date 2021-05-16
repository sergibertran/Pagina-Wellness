import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
   
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
