import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    DashboardComponent,
    HeaderPageComponent,
    FooterPageComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderPageComponent,
    FooterPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
