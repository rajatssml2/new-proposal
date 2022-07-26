import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-analytic-header',
  templateUrl: './analytic-header.component.html',
  styleUrls: ['./analytic-header.component.css']
})
export class AnalyticHeaderComponent implements OnInit {
  routeName:any;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

}
