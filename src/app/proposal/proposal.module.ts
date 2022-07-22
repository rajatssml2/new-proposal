import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { LoaderComponent } from '../loader/loader.component';

import { AgGridModule } from 'ag-grid-angular';
import { RowEditComponent } from './row-edit/row-edit.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProposalListComponent,
    LoaderComponent,
    RowEditComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ProposalRoutingModule,
    AgGridModule,
    ReactiveFormsModule
    
  ],
  exports: [
    LoaderComponent,
    FileUploadComponent
  ]
})
export class ProposalModule { }
