import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css'],
})
export class ResultCardComponent implements OnInit {
  @Input() result?: Fruit ;
  constructor() {}

  ngOnInit() {}
}
