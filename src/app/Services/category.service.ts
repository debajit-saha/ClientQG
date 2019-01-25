import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  apiRoute = 'http://localhost:8080/api/category/';
  constructor(private http: Http) { }

  getCategories(){
    return this.http.get(this.apiRoute + 'getAllCategories', { withCredentials: true });
  }

}