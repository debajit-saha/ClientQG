import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/Services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [];
  filteredQuestions = [];
  category : string;
  difficulty : string;
  constructor(private route : ActivatedRoute, private questionService : QuestionService) { }

  ngOnInit() { 
    this.questionService.getQuestions().take(1).subscribe(data => {
    this.questions = data.json();
      this.populateProducts();
    }); 
  }

  private populateProducts(){
    this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
    })
  }

  private applyFilter() { 
    this.filteredQuestions = (this.category) ? 
    this.questions.filter(p => p.categoryType === this.category) : 
    this.questions;
    
    // this.filterByDifficulty();
  }
}
