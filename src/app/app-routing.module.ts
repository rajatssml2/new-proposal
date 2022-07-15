import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAnalyticComponent } from './dashboard-analytic/dashboard-analytic.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard-analytic',
    component: DashboardAnalyticComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '',
        loadChildren: () => import('./proposal/proposal.module').then(m => m.ProposalModule)
      },
      {
        path: '',
        loadChildren: () => import('./proposal/proposal.module').then(m => m.ProposalModule)
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
