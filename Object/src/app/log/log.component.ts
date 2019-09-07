import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Utente } from '../utente.model';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() utenteLista: Utente[];
  @Input() mockUtente: Utente;

  mostra: boolean = true;
  giusto: boolean = true;

  myLog: FormGroup;
  constructor(fb: FormBuilder) {
    this.myLog = fb.group({
      'user': ['', Validators.required],
        'password':['', Validators.required]
    });
   }

  ngOnInit() {
  }


   onLog(): boolean{
    let t = -1;
    for(let i = 0; i<this.utenteLista.length; i++){
      if(this.myLog.controls['user'].value==this.utenteLista[i].username && this.myLog.controls['password'].value==this.utenteLista[i].password){
        t = i;
      }
    }
    if(t!=-1){
      this.mostra = false;
      this.giusto = true;
      this.mockUtente = this.utenteLista[t];
      this.mockUtente.username = this.utenteLista[t].username;
      this.mockUtente.nome = this.utenteLista[t].nome;
      this.mockUtente.cognome = this.utenteLista[t].cognome;
      this.mockUtente.email = this.utenteLista[t].email;
      this.mockUtente.password = this.utenteLista[t].password;
    }else{
      this.giusto = false;
    }
    return false;
  }

  onLogOut(): boolean{
    this.mostra = true;
    this.user.username = "";
    this.user.nome = "";
    this.user.cognome = "";
    this.user.email = "";
    this.user.password = "";

    return false;
  }

}
