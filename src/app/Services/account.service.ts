import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  apiRoute = 'http://localhost:8080/api/account/';
  constructor(private http: HttpClient) { }

  getAccounts(){
    return this.http.get(this.apiRoute + 'getAllAccounts');
  }

  create(value : string){
    return this.http.post(this.apiRoute + 'addNewAccount?accountType='+value, null)
  }

  update(value){
    return this.http.put(this.apiRoute + 'updateAccount', value);
  }

  delete(value){
    return this.http.delete(this.apiRoute + 'deleteAccount?accountTypeId=' + value);
  }

  getAccountById(value){
    return this.http.get(this.apiRoute + 'getAccountById?accountId=' + value);
  }

}
