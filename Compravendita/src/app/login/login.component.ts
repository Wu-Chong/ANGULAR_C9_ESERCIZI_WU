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
        'user': ['Inserire username', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLogin(): boolean{
    let t =0;
    for (let i =0; i < this.userList.length; i++){
      if (this.logForm.controls['user'].value == this.userList[i].userList)
    }
  }

}
