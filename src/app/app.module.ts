import { CategoryService } from './Services/category.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { InvalidUserComponent } from './invalid-user/invalid-user.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionFilterComponent } from './question-filter/question-filter.component';
import { QuestionCardComponent } from './question-card/question-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BsNavbarComponent,
    QuestionFormComponent,
    InvalidUserComponent,
    QuestionsComponent,
    QuestionFilterComponent,
    QuestionCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EditorModule,
    RouterModule.forRoot([
      { path: '', 
        component: QuestionsComponent,
        canActivate: [AuthGuard] },
      { path: 'question-form', 
        component: QuestionFormComponent,
        canActivate: [AuthGuard] },
      { path: 'invalid-user', 
        component: InvalidUserComponent,
      },      
    ])
  ],
  providers: [
    HttpClient,
    AuthGuard,
    AuthService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
