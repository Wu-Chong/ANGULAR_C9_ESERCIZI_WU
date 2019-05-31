import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import  { Utenti } from '../utenti.model';
import {Comments} from '../comments.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userList: Utenti[];
  @Input() user: Utenti;
  @Input() comments: Comments[];
  show: boolean = true;
  correct: boolean = true;


    logForm: FormGroup;
   constructor(fb : FormBuilder){
    this.logForm = fb.group({
        'user': ['Inserire username', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLogin(): boolean{
    let t = -1;
    for(let i = 0; i<this.userList.length; i++){
      if(this.logForm.controls['user'].value==this.userList[i].username && this.logForm.controls['password'].value==this.userList[i].password){
        t = i;
      }
    }
    if(t!=-1){
      this.show = false;
      this.correct = true;
      this.user = this.userList[t];
      this.user.username = this.userList[t].username;
      this.user.nome = this.userList[t].nome;
      this.user.cognome = this.userList[t].cognome;
      this.user.email = this.userList[t].email;
      this.user.password = this.userList[t].password;
    }else{
      this.correct = false;
    }
    return false;
  }


  onLogOut(): boolean{
    this.show = true;
    this.user.username = "";
    this.user.nome = "";
    this.user.cognome = "";
    this.user.email = "";
    this.user.password = "";

    return false;
  }

}
