import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    apiRoute = 'http://localhost:8080/api/authenticate/';
    constructor(private http: HttpClient){}

    authenticateUser() {
        return this.http.get(this.apiRoute + 'user');
    }

    getUserInfo(){
        return this.http.get(this.apiRoute + 'userInfo');
    }
}