import { AccountService } from './../Services/account.service';
import { AuthService } from './../Services/auth.service';
import { QuestionService } from './../Services/question.service';
import { QuestionForm } from './../Models/question-form';
import { CategoryService } from './../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

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
    private router: Router,
    private route: ActivatedRoute) {}

  questionform : QuestionForm = { name : "",
    option1 : "",
    option2 : "",
    option3 : "",
    option4 : "",
    answer : "",
    difficultyTypeId : null,
    categoryTypeId : null,
    accountTypeId : null };
    categories : any[];
    userInfo;
    accountName;
    id;

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

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.questionService.getQuestionById(this.id).take(1).subscribe(q => this.questionform = <any>q);

    console.log(this.questionform)
  }

  formErrors : boolean = false;
  categoryError : boolean = false;
  questionError : boolean = false;
  option1Error : boolean = false;
  option2Error : boolean = false;
  option3Error : boolean = false;
  option4Error : boolean = false;
  answerError : boolean = false;
  levelError : boolean = false;

  public editorSettings: Object = {
    placeholderText: '',
    charCounterCount: true,
    quickInsertTags: [''],
    heightMin: 100,
    heightMax: 300,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert']
  }

  SaveQuestion(){
    this.checkErrors();
    if(!this.formErrors){      
      if(this.id) {
        var data1 = {
          Name : this.questionform.name,
          Option1 : this.questionform.option1,
          Option2 : this.questionform.option2,
          Option3 : this.questionform.option3,
          Option4 : this.questionform.option4,
          Answer : this.questionform.answer,
          CategoryTypeId : this.questionform.categoryTypeId,
          DifficultyTypeId : this.questionform.difficultyTypeId,
          AccountTypeId : this.userInfo.accountTypeId,
          Id : this.id   
         }
        this.questionService.update(data1).take(1).subscribe(result => {
          if(result){
            alert("Question updated Successfully.");
            this.router.navigate(['']);
          }
          else{
            alert("Error occured");
          }
        });
      }
      else{     
          var data2 = {
          Name : this.questionform.name,
          Option1 : this.questionform.option1,
          Option2 : this.questionform.option2,
          Option3 : this.questionform.option4,
          Option4 : this.questionform.option1,
          Answer : this.questionform.answer,
          CategoryTypeId : this.questionform.categoryTypeId,
          DifficultyTypeId : this.questionform.difficultyTypeId,
          AccountTypeId : this.userInfo.accountTypeId    
         }
        this.questionService.create(data2).take(1).subscribe(result => {
        if(result){
            alert("Question added Successfully.");
            this.router.navigate(['']);
        }
        else{
            alert("Error occured");
        }
      });
      }     
    }
  }

  private checkErrors(){
    this.questionform.categoryTypeId == null ? this.categoryError = true : this.categoryError = false;
    this.questionform.name.length == 0 ? this.questionError = true : this.questionError = false;
    this.questionform.option1.length == 0 ? this.option1Error = true : this.option1Error = false;
    this.questionform.option2.length == 0 ? this.option2Error = true : this.option2Error = false;
    this.questionform.option3.length == 0 ? this.option3Error = true : this.option3Error = false;
    this.questionform.option4.length == 0 ? this.option4Error = true : this.option4Error = false;
    this.questionform.answer.length == 0 ? this.answerError = true : this.answerError = false;
    this.questionform.difficultyTypeId == null ? this.levelError = true : this.levelError = false;

    if(this.categoryError || this.questionError || this.option1Error 
      || this.option2Error || this.option3Error || this.option4Error || this.answerError || this.levelError)
       { 
          this.formErrors = true;
          window.scrollTo(0,0);
       } 
      else
        this.formErrors = false;
  }

}
