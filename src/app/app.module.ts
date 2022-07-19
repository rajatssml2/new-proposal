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
import { DashboardAnalyticComponent } from './dashboard-analytic/dashboard-analytic.component'
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
    DashboardAnalyticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgChartsModule,
    ProposalModule,
    
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    HeaderPageComponent,
    FooterPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
