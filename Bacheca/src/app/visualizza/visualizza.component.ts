import { Component, OnInit, Input } from '@angular/core';
import { Prenota } from '../prenota';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {

  @Input() prenota: Prenota;
  constructor() { }

  ngOnInit() {
  }

}
