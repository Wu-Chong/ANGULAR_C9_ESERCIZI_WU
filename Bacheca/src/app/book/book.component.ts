import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    myForm: FormGroup;
    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
        'nome': ['Inserisci nome', Validators.required],
        'cognome': ['Inserisci cognome', Validators.required]
    });
 }


  ngOnInit() {
  }

}
