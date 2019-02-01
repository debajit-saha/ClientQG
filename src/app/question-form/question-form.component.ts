import { AccountService } from './../Services/account.service';
import { AuthService } from './../Services/auth.service';
import { QuestionService } from './../Services/question.service';
import { QuestionForm } from './../Models/question-form';
import { CategoryService } from './../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  constructor( 
    private categoryService : CategoryService,
    private questionService : QuestionService,
    private accountService : AccountService,
    private authService : AuthService,
    private router: Router) {}

  questionform : QuestionForm = {question : "",
    option1 : "",
    option2 : "",
    option3 : "",
    option4 : "",
    answer : "",
    difficultyLevelId : null,
    categoryTypeId : null,
    accountTypeId : null};
  categories : any[];
  userInfo;
  accountName;

  ngOnInit() {
    this.categoryService.getCategories().take(1).subscribe(data => {
      this.categories = <any[]>data;
    });
    this.authService.getUserInfo().take(1).subscribe(data => {
      this.userInfo = data;
        this.accountService.getAccountById(this.userInfo.accountTypeId).take(1).subscribe(data => {
            this.accountName = data;
        });      
    });
  }

  SaveQuestion(questionObject : any){
   var data = {
     Name : questionObject.question,
     Option1 : questionObject.option1,
     Option2 : questionObject.option2,
     Option3 : questionObject.option3,
     Option4 : questionObject.option4,
     Answer : questionObject.answer,
     CategoryTypeId : questionObject.categoryTypeId,
     DifficultyTypeId : questionObject.level,
     AccountTypeId : this.userInfo.accountTypeId    
   }
   this.questionService.create(data).take(1).subscribe(result => {
     if(result){
        alert("Question added Successfully.");
        this.router.navigate(['']);
     }
     else{
        alert("Error occured");
     }
   })
  }
}
