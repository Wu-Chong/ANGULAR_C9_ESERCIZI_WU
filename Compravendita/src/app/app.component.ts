import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Utenti } from './utenti.model';
import {Utente } from './mock-utenti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compravendita';

  users: Utenti[] = Utente;
  constructor(){

  }

}
