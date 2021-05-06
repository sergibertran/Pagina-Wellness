import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { enquesta } from 'app/models/enquesta';

@Component({
  selector: 'app-enquesta',
  templateUrl: './enquesta.component.html',
  styleUrls: ['./enquesta.component.css']
})
export class EnquestaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  enquestaModel = new enquesta("","","","","","","","","","","","","","","","","","","","","","","","","","","","");

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      
    });
}
}
