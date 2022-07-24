import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router'
import * as FileSaver from 'file-saver';
import Swal from 'sweetalert2';
declare var saveAs:any;
// import {FileUploadComponent} from '../file-upload/file-upload.component'

import {
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridReadyEvent,
  ICellEditorComp,
  GridOptions,
  RowValueChangedEvent,
} from 'ag-grid-community';
import { RowEditComponent } from '../row-edit/row-edit.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise';
declare var NumericCellEditor: ICellEditorComp;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  proposalForm: any = FormGroup;
  isDownloadIconShow = false;
  proposalArr:any = [];
  fileSrc: any;
  isReadOnly = false;
  loginUser:any='';
  currentUrl: any = ''
  submitted = false;
  ivaFileName: any;
  ivaFileSource: any;
  
  // rowData: any;
  gridApi: any;  
  gridColumnApi: any;  
  IsColumnsToFit = true;
  editType = 'fullRow';
  columnDefs: any;  
  rowData: any;
  public defaultColDef: any;
  frameworkComponents: any;
  public documentGrp: any;
  public totalfiles: Array<File> =[];
  public totalFileName = [];
  public lengthCheckToaddMore =0;
  proposalCategory: any;
  categoryData: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.columnDefs = [
      {
        field: 'milestone',
        // cellEditor: 'agSelectCellEditor',
        editable: true,
        // cellEditorParams: {
        //   values: ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5','Milestone 6','Milestone 7','Milestone 8','Milestone 9','Milestone 10'],
        // },
      },
      { field: 'percentage', headerName: "Percentage %", editable: true, aggFunc: "sum",valueParser: "Number(newValue)"},
      {
        headerName: "Actions",
        field: "action",
        cellRenderer: "rowEditCRenderer",
        hide: this.checkActionColumn(),
        cellRendererParams: {
          cancelOtherRowEditors: this.cancelOtherRowEditors.bind(this)
        }
      }
    ];
    this.frameworkComponents = {
      rowEditCRenderer: RowEditComponent
      };
      this.defaultColDef = {
        sortingOrder: ["asc", "desc"],
        stopEditingWhenGridLosesFocus: false,
        sortable:true,
        enableFilter: true,
        suppressKeyboardEvent:  (event: any) =>{
            if(!event.editing || event.event.code === "Enter")
            return true;
            return false;
        }
    };
   }
   checkActionColumn() {
    
    let user = localStorage.getItem('loginUser');
    console.log("this.loginUser=",user)
    if( user != 'state_officer') {
      return true;
    }
    return false
  }

   cancelOtherRowEditors(currentRowIndex: any) {
    const renderers = this.gridApi.getCellRendererInstances();
    renderers.forEach((renderer: any)=> {
      if(!renderer.isNew && 
        currentRowIndex !== renderer.params.node.rowIndex) {
        renderer.onCancelClick();
      }
    });
  }
  onCellClicked(params: any) {
    if(params.node.field !== 'action') {
      this.cancelOtherRowEditors(params.node.rowIndex);
    }
  }

    
   getRowData(val: any) {
    console.log("valRowData=", val)
    return val;
  }
  getAllRows() {
    let rowData:any = [];
    this.gridApi.forEachNode((node: any) => rowData.push(node.data));
    return rowData;
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.rowData);  
    if (this.IsColumnsToFit) {  
      this.gridApi.sizeColumnsToFit();  
    }  

  }

  // BindData(params:any) {  
  //   this.gridApi = params.api;  
  //   this.gridColumnApi = params.columnApi;  
  //   params.api.setRowData(this.rowData);  
  //   if (this.IsColumnsToFit) {  
  //     this.gridApi.sizeColumnsToFit();  
  //   }  
  // }  
  onCellValueChanged(event: any) {
   
  }

  onRowValueChanged(event: any) {
    
  }

  AddRows(){
      var rowta={
          milestone:"", percentage:""
      }
      this.gridApi.applyTransaction({add: [rowta],addIndex: (this.getAllRows() && this.getAllRows().length>0) ? this.getAllRows().length : 0})
      // this.gridOptions.api.refreshView();
  }

   get f(){
    return this.proposalForm.controls;
  }

  ngOnInit(): void {
    this.proposalForm = this.fb.group({
      id: [''],
      purpose: ['', Validators.required],
      remarks: [''],
      sentTo: [{value: '', disabled: false}, [Validators.required]],
      status: [''],
      submittedOn: [''],
      fundType: ['', [Validators.required]],
      estimatedAmount: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]


    });
    let lUser = localStorage.getItem('loginUser');
    this.loginUser = lUser;
    let params:any = this.route.snapshot.paramMap.get('items');
    params = JSON.parse(params)
      console.log(params);
      if (params) {
        let val:any = localStorage.getItem('proposalData');
        val = JSON.parse(val);
        val.find((x:any) => x.id === params);
        console.log('val=',val);
        this.proposalForm.patchValue({
          id: val[0].id,
          purpose: val[0].purpose,
          remarks: val[0].remarks,
          // sentTo: val[0].sentTo,
          // upload: val[0].upload,
          estimatedAmount: val[0].estimatedAmount,
          startDate: val[0].startDate,
          endDate: val[0].endDate,
          fundType: val[0].fundType
  
        });
        this.rowData = this.getRowData(val[1].milestone)
        this.categoryData = val[1].categoryData;
        
        this.fileSrc = val[0].fileSource;
        this.isReadOnly = true;
        // this.proposalForm.controls.category.disable();
        this.proposalForm.controls.fundType.disable();
        // this.proposalForm.controls.upload.disable();
        // this.proposalForm.controls.sentTo.disable();
        let lUser = localStorage.getItem('loginUser');
        this.loginUser = lUser;
        if(this.loginUser == 'morth_manager') {
           this.proposalForm.controls.sentTo.disable();
           this.proposalForm.controls.remarks.disable();
           this.ivaFileName = val[0].ivaFileName;
           this.ivaFileSource = val[0].ivaFileSource;
        }
      }
  }
  onDownloadFile(fileSrc: any, fileName: any) {
    // let ss = this.fileSrc.substring("data:image/".length, this.fileSrc.indexOf(";base64"))
    // console.log("ss=",ss)
    // const blob = new Blob([this.fileSrc], {type: ss});
    // FileSaver.saveAs(blob, 'sample');
    let base64String = fileSrc;
    this.downloadPdf(base64String, fileName);
  }
  onIVADownloadFile() {
    let base64String = this.ivaFileSource;
    this.downloadPdf(base64String, this.ivaFileName);
  }
  downloadPdf(base64String: any, fileName: any) {
    const source = base64String;
    const link = document.createElement("a");
    const [,type] = base64String.split(';')[0].split('/');
    link.href = source;
    link.download = `${fileName}.${type}`
    link.click();
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", ()=>{
        
        this.ivaFileName = event.target.files[0].name;
        this.ivaFileSource = reader.result;
        this.isDownloadIconShow = !this.isDownloadIconShow;
      })

      reader.readAsDataURL(event.target.files[0]);

      // this.proposalArr.push(this.proposalForm.value);

    }
  }
  getCategrory(event: any) {
    console.log("event==",event)
    this.proposalCategory = event;
  }
  submit(){
    let tableData = this.getAllRows();
    console.log("tableData=",tableData);
    if(this.loginUser=='state_officer') {
      this.proposalForm.patchValue({
        sentTo: 'State transport manager'  
      });
    } else if(this.loginUser=='state_manager') {
      this.proposalForm.patchValue({
        sentTo: 'IVA'  
      });
    } else if(this.loginUser=='iva') {
      this.proposalForm.patchValue({
        sentTo: 'MoRTH Manager'  
      });
    }
    this.submitted = true;
    console.log(this.proposalForm)
    if(!this.proposalForm.valid) return;
    let sum = 0;
    if(tableData && tableData.length>0) {
      
      tableData.forEach((element:any) => {
        sum = sum+element.percentage
      });
      if(sum>100) {
        Swal.fire({
          icon: 'warning',
          title: 'Total Milestone percentage should not be exceeded 100%',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Ok'
        }).then((result) => {
          
        })
        return;
      }
    }
    if(!this.proposalCategory || this.proposalCategory.length==0) {
      Swal.fire({
        icon: 'warning',
        title: 'Please add and save proposal category',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: 'Ok'
      }).then((result) => {
        
      })
      return;
    }
    let num = Math.floor(Math.random() * 1000000);
    this.proposalForm.patchValue({
      id: num,
      status: 'Submitted by state officer',
      submittedOn: new Date().toLocaleDateString()
    });
    let arr = [this.proposalForm.value];
    arr.push()
    let obj = {
      milestone: tableData,
      categoryData: this.proposalCategory
    }
    arr.push(obj)
    localStorage.setItem("proposalData", JSON.stringify(arr))
    Swal.fire({
      icon: 'success',
      title: 'Proposal submitted successfully',
      text: 'Proposal id: '+num,
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['dashboard'])
      }
    })
  }

  onApproveByMorthManager() {
    let val:any = localStorage.getItem('proposalData');
    val = JSON.parse(val);
    val[0].status = 'Approved';
    localStorage.setItem("proposalData", JSON.stringify(val))
    Swal.fire({
      icon: 'success',
      title: 'Proposal approved successfully',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['dashboard'])
      }
    })
  }

  onSendToIVA() {
    if(this.loginUser=='state_manager') {
      this.proposalForm.patchValue({
        sentTo: 'IVA'
      });
    }
    this.submitted = true;
    console.log(this.proposalForm)
    if(!this.proposalForm.valid) return;

    let val:any = localStorage.getItem('proposalData');
    val = JSON.parse(val);
    val[0].status = 'Verified by state manager';
    val[0].remarks = this.proposalForm.value.remarks;
    val[0].sentTo = this.proposalForm.value.sentTo;
    localStorage.setItem("proposalData", JSON.stringify(val))
    Swal.fire({
      icon: 'success',
      title: 'Proposal sent to IVA successfully',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['dashboard'])
      }
    })
  }

  onSendToMorthManager() {
    if(this.loginUser=='iva') {
      this.proposalForm.patchValue({
        sentTo: 'MoRTH Manager'  
      });
    }
    this.submitted = true;
    console.log(this.proposalForm)
    if(!this.proposalForm.valid) return;
    if(!this.ivaFileName || !this.ivaFileSource ) {
      Swal.fire('Error', 'Please upload a file', 'error')
      return;
    }

    let val:any = localStorage.getItem('proposalData');
    val = JSON.parse(val);
    val[0].status = 'Verified by IVA';
    val[0].remarks = this.proposalForm.value.remarks;
    val[0].sentTo = this.proposalForm.value.sentTo;
    val[0].ivaFileName = this.ivaFileName;
    val[0].ivaFileSource = this.ivaFileSource;
    localStorage.setItem("proposalData", JSON.stringify(val))
    Swal.fire({
      icon: 'success',
      title: 'Proposal sent to Morth Manager successfully',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'Ok'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['dashboard'])
      }
    })
  }

  onCancel() {
    this.router.navigate(['dashboard'])
  }

}
