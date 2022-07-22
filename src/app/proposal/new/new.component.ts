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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.columnDefs = [
      {
        field: 'milestone',
        cellEditor: 'agSelectCellEditor',
        editable: true,
        cellEditorParams: {
          values: ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5','Milestone 6','Milestone 7','Milestone 8','Milestone 9','Milestone 10'],
        },
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
      this.gridApi.applyTransaction({add: [rowta],addIndex: 0})
      // this.gridOptions.api.refreshView();
  }

   get f(){
    return this.proposalForm.controls;
  }

  createUploadDocuments(): FormGroup {
    return this.formBuilder.group({
      doc_name: '',
      doc_description: '',
      documentFile : File
    });
  }

  get items() {
    return this.documentGrp.get('items') as FormArray;
  };

  addItem(): void {


//console.log("length is ",this.totalfiles.length);
//console.log("lengthCheckToaddMore ", this.lengthCheckToaddMore);

if(this.totalfiles.length!=0)
if( this.items.value[0].doc_name != "" && this.items.value[0].doc_description != "" && ((this.lengthCheckToaddMore) === (this.totalfiles.length)) )
{

    this.items.insert(0, this.createUploadDocuments())
     this.lengthCheckToaddMore=this.lengthCheckToaddMore+1;
}
  }

  removeItem(index: number) {

   this.totalfiles.splice(index);
   this.totalFileName.splice(index);
    this.items.removeAt(index);
    this.lengthCheckToaddMore=this.lengthCheckToaddMore-1;
   // console.log("name are ",this.totalFileName);

  }

  fileSelectionEvent (fileInput: any, oldIndex:any) {

    //console.log("oldIndex is ", oldIndex);

    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
      }
      if(oldIndex==0){
        this.totalfiles.unshift((fileInput.target.files[0]))
        // this.totalFileName.unshift(fileInput.target.files[0].name)
      }else {
        this.totalfiles[oldIndex]=(fileInput.target.files[0]);
        // this.totalFileName[oldIndex]=fileInput.target.files[0].name
      }

      reader.readAsDataURL(fileInput.target.files[0]);
    }

    if(this.totalfiles.length == 1)
    {
      this.lengthCheckToaddMore=1;
    }

  }




  public OnSubmit(formValue: any) {


    let main_form: FormData = new FormData();

    for(let j=0;j<this.totalfiles.length; j++)
    {
      console.log("the values is ",<File>this.totalfiles[j]);
      console.log("the name is ",this.totalFileName[j]);

      main_form.append(this.totalFileName[j],<File>this.totalfiles[j])
    }
    console.log(formValue.items)



    //reverseFileNames=this.totalFileName.reverse();

    let AllFilesObj: any= []

    formValue.items.forEach((element:any, index:any) => { 

      console.log("index is ",index);
      console.log("element is ", element);

      let eachObj=
      {
        'doc_name' : element.doc_name,
        'doc_description' : element.doc_description,
        'file_name' : this.totalFileName[index]
      }
      AllFilesObj.push(eachObj); 
    });

    //console.log("the Array data is ",AllFilesObj);
    main_form.append("fileInfo",JSON.stringify(AllFilesObj))

    
  }

  ngOnInit(): void {

    this.documentGrp = this.formBuilder.group({
      doc_name: '',
      doc_description: '',
      documentFile:new FormControl(File),

      items: this.formBuilder.array([this.createUploadDocuments()])
    });

    this.proposalForm = this.fb.group({
      id: [''],
      purpose: ['', Validators.required],
      category: [{value: '', disabled: false}, [Validators.required]],
      upload: [{value: '', disabled: false}, [Validators.required]],
      fileSource: new FormControl(''),
      remarks: [''],
      sentTo: [{value: '', disabled: false}, [Validators.required]],
      status: [''],
      submittedOn: [''],
      fundType: [''],
      estimatedAmount: [''],
      startDate: [new Date],
      endDate: [new Date]


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
          category: val[0].category,
          fileSource: val[0].fileSource,
          estimatedAmount: val[0].estimatedAmount,
          startDate: val[0].startDate,
          endDate: val[0].endDate,
          fundType: val[0].fundType
  
        });
        this.rowData = this.getRowData(val[1].milestone)
        this.isDownloadIconShow = true;
        this.fileSrc = val[0].fileSource;
        this.isReadOnly = true;
        this.proposalForm.controls.category.disable();
        this.proposalForm.controls.fundType.disable();
        this.proposalForm.controls.upload.disable();
        // this.proposalForm.controls.sentTo.disable();
        let lUser = localStorage.getItem('loginUser');
        this.loginUser = lUser;
        if(this.loginUser == 'morth_manager') {
           this.proposalForm.controls.sentTo.disable();
           this.proposalForm.controls.remarks.disable();
        }
      }
  }
  onDownloadFile() {
    // let ss = this.fileSrc.substring("data:image/".length, this.fileSrc.indexOf(";base64"))
    // console.log("ss=",ss)
    // const blob = new Blob([this.fileSrc], {type: ss});
    // FileSaver.saveAs(blob, 'sample');
    let base64String = this.fileSrc;
    this.downloadPdf(base64String,"sample");
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
        this.proposalForm.patchValue({

          fileSource: reader.result
  
        });
        this.isDownloadIconShow = true;
        this.fileSrc = reader.result;
      })

      reader.readAsDataURL(event.target.files[0]);

      // this.proposalArr.push(this.proposalForm.value);

    }
  }

  submit(){
    let tableData = this.getAllRows();
    console.log("tableData=",tableData);
    // return;
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

    

    let num = Math.floor(Math.random() * 1000000);

    this.proposalForm.patchValue({

      id: num,
      status: 'Submitted by state officer',
      submittedOn: new Date().toLocaleDateString()

    });

    const formData = new FormData();

    formData.append('upload', this.proposalForm.get('fileSource').value);
    console.log(this.proposalForm,formData)
    let arr = [this.proposalForm.value];
    arr.push()
    let obj = {
      milestone: tableData
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
    this.submitted = true;
    console.log(this.proposalForm)
    if(!this.proposalForm.valid) return;

    let val:any = localStorage.getItem('proposalData');
    val = JSON.parse(val);
    val[0].status = 'Verified by state manager';
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
    this.submitted = true;
    console.log(this.proposalForm)
    if(!this.proposalForm.valid) return;

    let val:any = localStorage.getItem('proposalData');
    val = JSON.parse(val);
    val[0].status = 'Verified by IVA';
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
