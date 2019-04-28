import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VisualizzaComponent } from './visualizza/visualizza.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizzaComponent,
  ],
  imports: [
    BrowserModule,  NgbModule,  FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
