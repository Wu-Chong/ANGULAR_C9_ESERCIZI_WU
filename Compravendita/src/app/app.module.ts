import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { BachecaComponent } from './bacheca/bacheca.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    BachecaComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
