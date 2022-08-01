import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderPageComponent } from './common/header-page/header-page.component';
import { FooterPageComponent } from './common/footer-page/footer-page.component';
import { NewComponent } from './proposal/new/new.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgChartsModule } from 'ng2-charts';
import { ProposalModule } from './proposal/proposal.module';
import { NgxEchartsModule } from 'ngx-echarts';
// import { LoaderComponent } from './loader/loader.component';
import { DashboardAnalyticComponent } from './dashboard-analytic/dashboard-analytic.component';
import { AgGridModule } from 'ag-grid-angular';
import { AnalyticComponent } from './analytic/analytic.component';
import { MapViewComponent } from './analytic/map-view/map-view.component';
import { AnalyticHeaderComponent } from './analytic/analytic-header/analytic-header.component';
import { AnalyticHomeComponent } from './analytic/analytic-home/analytic-home.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HomeMapComponent } from './analytic/analytic-home/home-map/home-map.component';
import { InnovationLabHomeComponent } from './innovation-lab/innovation-lab-home/innovation-lab-home.component';
// import highmaps from 'highcharts/modules/map.src';
// import more from 'highcharts/highcharts-more.src';
// export function highchartsModules() {
//   // apply Highcharts Modules to this array
//   console.log('====',more,highmaps)
//   return [more, highmaps];
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    DashboardComponent,
    HeaderPageComponent,
    FooterPageComponent,
    NewComponent,
    LandingPageComponent,
    DashboardAnalyticComponent,
    AnalyticComponent,
    MapViewComponent,
    AnalyticHeaderComponent,
    AnalyticHomeComponent,
    HomeMapComponent,
    InnovationLabHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgChartsModule,
    ProposalModule,
    AgGridModule,
    
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartModule
  ],
  exports: [
    HeaderPageComponent,
    FooterPageComponent,
    AnalyticHeaderComponent

  ],
  providers: [
    // { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
