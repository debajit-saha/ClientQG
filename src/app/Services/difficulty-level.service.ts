import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DfficultyLevelService {
  apiRoute = 'http://localhost:8080/api/difficulty/';
  constructor(private http: Http) { }

  getDifficultyLevel(){
    return this.http.get(this.apiRoute + 'getAllDifficulty', { withCredentials: true });
  }

}
