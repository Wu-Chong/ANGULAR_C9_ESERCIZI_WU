import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prenota } from './prenota';
import { Prenotato } from './mock-prenotato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bacheca';

  myForm: FormGroup;
  prenotaSelezionato: Prenota;
  prenotato = Prenotato;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'nome': ['Inserisci nome', Validators.required],
      'cognome': ['Inserisci cognome', Validators.required],
      'telefono': [' Inserisci telefono', Validators.required],
      'email': [' Inserisci email', Validators.required],
      'data': ['gg/mm/2019', Validators.required],
      'ora': ['Ora', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSelect(prenota: Prenota): void {
    this.prenotaSelezionato = prenota;
  }

  onSubmit(): void {

    let prenota: Prenota = new Prenota();
    prenota.nome = this.myForm.controls['nome'].value;
    prenota.cognome = this.myForm.controls['cognome'].value;
    prenota.telefono = this.myForm.controls['telefono'].value;
    prenota.email = this.myForm.controls['email'].value;
    prenota.data = this.myForm.controls['data'].value;
    prenota.ora = this.myForm.controls['ora'].value;

    this.prenotato.push(prenota);
  }

}


