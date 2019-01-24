import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    apiRoute = 'http://localhost:8080/api/authenticate/';
    constructor(private http: Http){}

    authenticateUser() {
        return this.http.get(this.apiRoute + 'user', { withCredentials: true });
    }

    getUserInfo(){
        return this.http.get(this.apiRoute + 'userInfo', { withCredentials: true })
    }
}