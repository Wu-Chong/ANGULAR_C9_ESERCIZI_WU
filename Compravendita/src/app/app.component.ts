import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compravendita';

  myForm: FormGroup; // si crea un variabile di Oggetto FormGroup

  constructor(fb : FormBuilder){
    this.myForm = fb.group({
        'nome': ['Inserire nome', Validators.required],  //crea una formControl, cioè un input per inserire un valore
        'cognome': ['Inserire cognome', Validators.required],
        'email': ['Inserire email', Validators.required],
        'password':['', Validators.required]
    });
  }

}
