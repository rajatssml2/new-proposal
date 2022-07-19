import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { LoaderComponent } from '../loader/loader.component';



@NgModule({
  declarations: [
    ProposalListComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ProposalRoutingModule
    
  ],
  exports: [
    LoaderComponent
  ]
})
export class ProposalModule { }
