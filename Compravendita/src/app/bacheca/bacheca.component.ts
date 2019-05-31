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
   comForm: FormGroup;
   @Input() comments : Comments[];
   @Input() user: Utenti;

  constructor(fb : FormBuilder){
    this.bacForm = fb.group({
        'titolo': ['Inserire titolo', Validators.required]
    });

    this.comForm = fb.group({
        'commento': ['Inserire commento', Validators.required]
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


  addCom(comm: Comments[]): boolean{
    if (this.comForm.valid){
      comm.push(new Comments(this.comForm.controls['commento'].value, this.user, new Array<Comments>()));
    }
    return false;
  }

}
