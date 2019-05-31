import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import  { Comments } from '../comments.model';
import {Utenti} from '../utenti.model';

@Component({
  selector: 'app-bacheca-comment',
  templateUrl: './bacheca-comment.component.html',
  styleUrls: ['./bacheca-comment.component.css']
})
export class BachecaCommentComponent implements OnInit {

  @Input() comments : Comments[];
   @Input() user: Utenti;
   bacForm: FormGroup;
   constructor(public fb : FormBuilder){
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
