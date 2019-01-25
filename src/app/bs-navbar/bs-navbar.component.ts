import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user : any;
  collapsed = true;
  constructor(private authService: AuthService) { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  async ngOnInit() {
    this.authService.getUserInfo().take(1).subscribe(user =>
        this.user = user.json());
  }

}
