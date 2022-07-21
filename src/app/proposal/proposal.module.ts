import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { LoaderComponent } from '../loader/loader.component';

import { AgGridModule } from 'ag-grid-angular';
import { RowEditComponent } from './row-edit/row-edit.component';



@NgModule({
  declarations: [
    ProposalListComponent,
    LoaderComponent,
    RowEditComponent
  ],
  imports: [
    CommonModule,
    ProposalRoutingModule,
    AgGridModule
    
  ],
  exports: [
    LoaderComponent
  ]
})
export class ProposalModule { }
