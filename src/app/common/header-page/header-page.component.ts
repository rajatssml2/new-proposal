import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.userService.onLogout();
    this.router.navigate(['/'])
  }

}
