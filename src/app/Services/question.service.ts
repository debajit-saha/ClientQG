import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionService {
  apiRoute = 'http://localhost:8080/api/questions/';
  constructor(private http: Http) { }

  getQuestions(){
    return this.http.get(this.apiRoute + 'getQuestions', { withCredentials: true });
  }

}
