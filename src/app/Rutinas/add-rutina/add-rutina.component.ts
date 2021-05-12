import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  constructor(private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombreRutina: ["", Validators.required],
      tipoRutina: ["", Validators.required],
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
  
      
  }
}
