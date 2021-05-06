import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nick: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
    });
}
