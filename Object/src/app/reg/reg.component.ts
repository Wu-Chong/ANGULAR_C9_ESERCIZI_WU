import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Utente } from '../utente.model';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  @Input() utenteLista: Utente[]; //riceva valori dal template principale ()
  myForm: FormGroup;

  constructor(public fb : FormBuilder){
    this.myForm = fb.group({
        'nome': ['', Validators.required],
        'cognome': ['', Validators.required],
        'user': ['', Validators.required],
        'email': ['', Validators.required],
        'password':['', Validators.required]
    });
  }

  ngOnInit() {
  }

     onSubmit(): boolean{
    if (this.myForm.valid){
      this.utenteLista.push(new Utente(this.myForm.controls['nome'].value, this.myForm.controls['cognome'].value, this.myForm.controls['user'].value, this.myForm.controls['email'].value, this.myForm.controls['password'].value));
    }
    return false;
  }
  }

