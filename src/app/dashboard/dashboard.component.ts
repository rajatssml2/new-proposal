import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginUser :any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginUser = localStorage.getItem('loginUser');
  }
  openList() {
    this.router.navigate(['proposal-list'])
  }

}
