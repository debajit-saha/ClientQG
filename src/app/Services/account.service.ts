import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  apiRoute = 'http://localhost:8080/api/account/';
  constructor(private http: HttpClient) { }

  getAccounts(){
    return this.http.get(this.apiRoute + 'getAllAccounts', { withCredentials: true });
  }

  create(value : string){
    return this.http.post(this.apiRoute + 'addNewAccount?accountType='+value, null, { withCredentials: true })
  }

}
