import { Component, HostListener, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  isLoggedIn = 'false'
  isSticky=false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log("window.pageYOffset=",window.pageYOffset)
    this.isSticky = window.pageYOffset >= 110;
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let isLogin = localStorage.getItem('isLoggedIn');
    
    if(isLogin) {
      this.isLoggedIn = isLogin
    }
    console.log("isLogin=",this.isLoggedIn)
  }

  onLogOut() {
    this.userService.onLogout();
    this.router.navigate(['/'])
  }

}
