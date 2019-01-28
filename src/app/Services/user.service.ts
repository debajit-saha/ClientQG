import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';

@Injectable()
export class UserService {

  apiRoute = 'http://localhost:8080/api/users/';
  constructor(private http: Http) { }
  
  getUsers(){
    return this.http.get(this.apiRoute + 'getAllUsers', { withCredentials: true });
  }

  create(user : any){

   let body = JSON.stringify(user);            
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers, withCredentials: true });
  

    return this.http.post(this.apiRoute + 'addNewUser', body, options);
  }

}
