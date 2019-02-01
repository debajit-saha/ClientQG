import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  apiRoute = 'http://localhost:8080/api/category/';
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.apiRoute + 'getAllCategories');
  }

  create(value : string){
    return this.http.post(this.apiRoute + 'addNewCategory?categoryType='+value, null);
  }

  update(value){
    return this.http.put(this.apiRoute + 'updateCategory', value);
  }

  delete(value){
    return this.http.delete(this.apiRoute + 'deleteCategory?categoryTypeId=' + value);
  }



}
