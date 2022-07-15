import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAnalyticRoutingModule } from './dashboard-analytic-routing.module';
import { DashboardAnalyticComponent } from './dashboard-analytic.component';

// import { BaseChartDirective, NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardAnalyticComponent
  ],
  imports: [
    CommonModule,
    // BaseChartDirective,
    // NgChartsConfiguration,
    // NgChartsModule
    
  ]
})
export class DashboardAnalyticModule { }
