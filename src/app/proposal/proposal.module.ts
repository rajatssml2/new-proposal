import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';


@NgModule({
  declarations: [
    ProposalListComponent
  ],
  imports: [
    CommonModule,
    ProposalRoutingModule
  ]
})
export class ProposalModule { }
