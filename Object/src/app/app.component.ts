import { Component } from '@angular/core';
import { Utente } from './utente.model';
import { UtenteGiaLoggato} from './mock-utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Object';

  users: Utente[];
  UtenteLoggato: Utente;

  constructor(){
    this.users = UtenteGiaLoggato;
    this.UtenteLoggato = new Utente("", "","", "","");
  }
}
