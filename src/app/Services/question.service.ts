import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
  apiRoute = 'http://localhost:8080/api/questions/';
  constructor(private http: HttpClient) { }

  getQuestions(){
    return this.http.get(this.apiRoute + 'getQuestions');
  }

  create(question){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/json; charset=utf-8',
        'withCredentials': 'true'
      })
    };
    return this.http.post(this.apiRoute + 'postQuestions', question, httpOptions);
  }
}
