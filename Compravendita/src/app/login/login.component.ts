import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import  { Utenti } from '../utenti.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userList: Utenti[];
    logForm: FormGroup;
   constructor(fb : FormBuilder){
    this.logForm = fb.group({
        'nome': ['Inserire nome', Validators.required],  //crea una formControl, cioè un input per inserire un valore
        'cognome': ['Inserire cognome', Validators.required],
        'user': ['Inserire username', Validators.required],
        'email': ['Inserire email', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
