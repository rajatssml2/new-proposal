import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';

const routes: Routes = [
  {
    path: 'new-proposal',
    component: NewComponent
  },
  {
    path: 'edit-proposal',
    component: NewComponent
  },
  {
    path: 'proposal-list',
    component: ProposalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalRoutingModule { }
