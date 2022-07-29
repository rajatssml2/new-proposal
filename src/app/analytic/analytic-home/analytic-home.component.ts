import { Component, OnInit } from '@angular/core';
import config from '../../../assets/congif';
@Component({
  selector: 'app-analytic-home',
  templateUrl: './analytic-home.component.html',
  styleUrls: ['./analytic-home.component.css']
})
export class AnalyticHomeComponent implements OnInit {
  stateOpeions:any = config.state;
  stateSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectState() {
    this.stateSelected = true;
  }

}
