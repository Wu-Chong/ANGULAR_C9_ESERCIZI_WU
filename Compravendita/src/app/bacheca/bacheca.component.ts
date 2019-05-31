import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import  { Comments } from '../comments.model';
import {Utenti} from '../utenti.model';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {

   bacForm: FormGroup;
   @Input() comments : Comments[];
   @Input() user: Utenti;

  constructor(fb : FormBuilder){
    this.bacForm = fb.group({
        'titolo': ['Inserire titolo', Validators.required]
    });
  }

  ngOnInit() {
  }

  onBac(): boolean{
    if (this.bacForm.valid){
      this.comments.push(new Comments(this.bacForm.controls['titolo'].value, this.user, new Array<Comments>()));
    }
    return false;
  }

}
