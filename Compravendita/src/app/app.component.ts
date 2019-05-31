import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Utenti } from './utenti.model';
import {Utente } from './mock-utenti';
import { Comments } from './comments.model';
import {Commenti } from './mock.comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compravendita';

  users: Utenti[];
  utenteLoggato: Utenti;
  comments: Comments[];
  constructor(){
    this.users = Utente;
    this.utenteLoggato = new Utenti("","","","","");
    this.comments= Commenti;

  }

}
