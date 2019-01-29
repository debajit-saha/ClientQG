import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
    
    canActivate() {
    return this.authService.authenticateUser()
            .map(user => {
                if(user == 1)
                    return true;
                else{
                    this.router.navigate(['invalid-user']);
                    return false;
                }                     
            });    
    }
}
