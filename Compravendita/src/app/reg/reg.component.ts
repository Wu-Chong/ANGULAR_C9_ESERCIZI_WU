import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Utenti } from '../utenti.model';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  @Input() userList: Utenti[];
  myForm: FormGroup;

  constructor(public fb : FormBuilder){
    this.myForm = fb.group({
        'nome': ['Inserire nome', Validators.required], 
        'cognome': ['Inserire cognome', Validators.required],
        'user': ['Inserire username', Validators.required],
        'email': ['Inserire email', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

     onSubmit(): boolean{
    if (this.myForm.valid){
      this.userList.push(new Utenti(this.myForm.controls['nome'].value, this.myForm.controls['cognome'].value, this.myForm.controls['username'].value, this.myForm.controls['email'].value, this.myForm.controls['password'].value));
    }
    return false;
  }
  }

