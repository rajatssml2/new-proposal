import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import * as FileSaver from 'file-saver';
import Swal from 'sweetalert2';
declare var saveAs:any;

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

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.proposalForm = this.fb.group({
      id: ['', Validators.required],
      purpose: ['', Validators.required],
      category: [{value: '', disabled: false}, [Validators.required]],
      upload: [{value: '', disabled: false}],
      fileSource: new FormControl('', [Validators.required]),
      remarks: ['', [Validators.required]],
      sentTo: [{value: '', disabled: false}, [Validators.required]]
    });
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
          sentTo: val[0].sentTo,
          // upload: val[0].upload,
          category: val[0].category,
          fileSource: val[0].fileSource
  
        });
        this.isDownloadIconShow = true;
        this.fileSrc = val[0].fileSource;
        this.isReadOnly = true;
        this.proposalForm.controls.category.disable();
        this.proposalForm.controls.upload.disable();
        this.proposalForm.controls.sentTo.disable();
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

  submit(formVal: any){
    let num = Math.floor(Math.random() * 1000000);

    this.proposalForm.patchValue({

      id: num

    });

    const formData = new FormData();

    formData.append('upload', this.proposalForm.get('fileSource').value);
    console.log(this.proposalForm,formData)
    let arr = [this.proposalForm.value];
    arr.push()
    localStorage.setItem("proposalData", JSON.stringify(arr))
    Swal.fire('Data saved successfully', 'Proposal id: '+num, 'success')
  }

}
