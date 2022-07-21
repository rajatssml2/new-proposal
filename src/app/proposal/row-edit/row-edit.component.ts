import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-row-edit',
  templateUrl: './row-edit.component.html',
  styleUrls: ['./row-edit.component.css']
})
export class RowEditComponent implements ICellRendererAngularComp {
  public params: any;
  public isNew: any;
  previousData: any;
  agInit(params: any): void {
      this.params = params;
  }
  
   constructor() {
      this.isNew = true;
  }

  invokeParentMethod() {
      this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
  }

  refresh(): boolean {
      return false;
  }
  
  onEditClick() {
    const index = this.params.node.rowIndex;
    this.params.cancelOtherRowEditors(index);
    this.isNew = false;
    this.previousData = JSON.parse(JSON.stringify(this.params.node.data));
    let cols = this.params.columnApi.getAllGridColumns();
    let firstCol = {
        "colId": ""
    }
    if (cols) {
        firstCol = cols[0];
    }
    let rowIndex = this.params.node.rowIndex;
    this.params.api.setFocusedCell(rowIndex, firstCol.colId);
    this.params.api.startEditingCell({
        rowIndex: rowIndex,
        colKey: "milestone"
    });
  }

  onUpdateClick() {
      this.isNew = true;
      let obj: any = {};
      obj.type = "update";
      this.params.api.stopEditing();
      obj.selectedData = [this.params.data];
      // update logic ....
  }

  onCancelClick() {
      this.isNew = true;
      this.params.node.setData(this.previousData);
      this.params.api.stopEditing(true);
  }
  
  onDeleteClick() {
    const selectedData = [this.params.node.data];
    console.log(selectedData);
    this.params.api.applyTransaction({ remove: selectedData });
  }
}