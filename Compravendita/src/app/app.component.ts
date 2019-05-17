import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Compravendita';

  myForm: FormGroup; // si crea un variabile di Oggetto FormGroup

  constructor(fb : FormBuilder){
    this.myForm = fb.group({
        
    });
  }

}
