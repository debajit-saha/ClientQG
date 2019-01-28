import { AccountService } from './Services/account.service';
import { UserService } from 'app/Services/user.service';
import { QuestionService } from './Services/question.service';
import { CategoryService } from './Services/category.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { InvalidUserComponent } from './invalid-user/invalid-user.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionFilterComponent } from './question-filter/question-filter.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { DfficultyLevelService } from './Services/difficulty-level.service';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BsNavbarComponent,
    QuestionFormComponent,
    InvalidUserComponent,
    QuestionsComponent,
    QuestionFilterComponent,
    QuestionCardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DataTableModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: QuestionsComponent,
        canActivate: [AuthGuard] 
      },
      { 
        path: 'question-form', 
        component: QuestionFormComponent,
        canActivate: [AuthGuard] 
      },
      { 
        path: 'invalid-user', 
        component: InvalidUserComponent,
      },  
      { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuard] 
      },    
    ])
  ],
  providers: [
    HttpClient,
    AuthGuard,
    AuthService,
    CategoryService,
    QuestionService,
    DfficultyLevelService,
    UserService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
