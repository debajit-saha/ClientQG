import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  apiRoute = 'http://localhost:8080/api/users/';
  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get(this.apiRoute + 'getAllUsers', { withCredentials: true });
  }

  create(user : any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'withCredentials': 'true'
      })
    };
    return this.http.post(this.apiRoute + 'addNewUser', user, httpOptions);
  }

}
