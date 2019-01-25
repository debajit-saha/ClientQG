import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input('questions') questions;
  constructor() { }

  ngOnInit() {
  }

}
