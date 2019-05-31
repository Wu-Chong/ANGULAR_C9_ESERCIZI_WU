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
  @Input() user: Utenti;
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
      if(this.logForm.controls['username'].value==this.userList[i].username && this.logForm.controls['password'].value==this.userList[i].password){
        t = i;
      }
    }
    if(t!=-1){
      this.show = false;
      this.correct = true;
      this.user = this.userList[t];
    }else{
      this.correct = false;
    }
    return false;
  }

}
