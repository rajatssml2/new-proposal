import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent implements OnInit {
  routeName: any;

  constructor(public router: Router) { this.routeName =  this.router.url;
     }

  ngOnInit(): void {
    console.log("this.routeName=",this.routeName)
  }

}
