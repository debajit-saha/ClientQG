import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  apiRoute = 'http://localhost:8080/api/users/';
  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get(this.apiRoute + 'getAllUsers');
  }

  create(user : any){

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/json; charset=utf-8',
        'withCredentials': 'true'
      })
    };
    return this.http.post(this.apiRoute + 'addNewUser', user, httpOptions);
  }

  delete(value){
    return this.http.delete(this.apiRoute + 'deleteUser?userId=' + value);
  }

}
