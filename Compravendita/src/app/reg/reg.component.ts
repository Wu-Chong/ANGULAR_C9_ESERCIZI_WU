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
  myForm: FormGroup; // si crea un variabile di Oggetto FormGroup

  constructor(fb : FormBuilder){
    this.myForm = fb.group({
        'nome': ['Inserire nome', Validators.required],  //crea una formControl, cioè un input per inserire un valore
        'cognome': ['Inserire cognome', Validators.required],
        'user': ['Inserire username', Validators.required],
        'email': ['Inserire email', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

     onSubmit(): void {

    let utente: Utenti = new Utenti();
    utente.nome = this.myForm.controls['nome'].value;
    utente.cognome = this.myForm.controls['cogmone'].value;
    utente.email = this.myForm.controls['email'].value;
    utente.password = this.myForm.controls['password'].value;

    this.userList.push(utente);
  }

}
