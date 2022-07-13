import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin2 :any = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAdmin2 = localStorage.getItem('isAdmin2');
  }
  openList() {
    this.router.navigate(['proposal-list'])
  }

}
