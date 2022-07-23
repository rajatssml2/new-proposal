import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public documentGrp: any;
  public totalfiles: Array<File> = [];
  public totalFileName:any = [];
  fileSource: any = [];
  public lengthCheckToaddMore = 0;
  @Output() onCategoryPicked = new EventEmitter<any>();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.documentGrp = this.formBuilder.group({
      category: '',
      documentFile: new FormControl(File),

      items: this.formBuilder.array([this.createUploadDocuments()])
    });
  }

  createUploadDocuments(): FormGroup {
    return this.formBuilder.group({
      category: '',
      documentFile: File
    });
  }

  get items() {
    return this.documentGrp.get('items') as FormArray;
  };

  addItem(): void {


    //console.log("length is ",this.totalfiles.length);
    //console.log("lengthCheckToaddMore ", this.lengthCheckToaddMore);

    if (this.totalfiles.length != 0)
      if (this.items.value[0].category != "" && ((this.lengthCheckToaddMore) === (this.totalfiles.length))) {
        this.items.insert(this.totalfiles.length, this.createUploadDocuments())
        this.lengthCheckToaddMore = this.lengthCheckToaddMore + 1;
      }
  }

  removeItem(index: number) {

    this.totalfiles.splice(index);
    this.totalFileName.splice(index);
    this.fileSource.splice(index);
    this.items.removeAt(index);
    this.lengthCheckToaddMore = this.lengthCheckToaddMore - 1;
    // console.log("name are ",this.totalFileName);

  }

  fileSelectionEvent(fileInput: any, oldIndex: any) {

    //console.log("oldIndex is ", oldIndex);

    if (fileInput.target.files && fileInput.target.files.length>0) {
      
      var reader = new FileReader();
      reader.addEventListener("load", ()=>{
        if (oldIndex == 0) {
          this.totalfiles.unshift((fileInput.target.files[0]))
          this.totalFileName.unshift( fileInput.target.files[0].name)
          this.fileSource.unshift(reader.result);
        } else {
          this.totalfiles[oldIndex] = (fileInput.target.files[0]);
          this.totalFileName[oldIndex]=fileInput.target.files[0].name;
          this.fileSource[oldIndex]= reader.result;
        }

        if (this.totalfiles.length == 1) {
          this.lengthCheckToaddMore = 1;
        }
      })
      

      reader.readAsDataURL(fileInput.target.files[0]);
      
    }

    

  }




  public OnSubmit(formValue: any) {
    console.log(formValue);


    let main_form: FormData = new FormData();

    for (let j = 0; j < this.totalfiles.length; j++) {
      console.log("the values is ", <File>this.totalfiles[j]);
      console.log("the name is ", this.totalFileName[j]);
      console.log("the file source is ", this.fileSource[j]);

      main_form.append(this.totalFileName[j], <File>this.totalfiles[j], this.fileSource[j])
    }
    console.log(formValue.items)



    //reverseFileNames=this.totalFileName.reverse();

    let AllFilesObj: any = []

    formValue.items.forEach((element: any, index: any) => {

      console.log("index is ", index);
      console.log("element is ", element);

      let eachObj =
      {
        'category': element.category,
        'file_name': this.totalFileName[index],
        'fileSource': this.fileSource[index]
      }
      AllFilesObj.push(eachObj);
    });

    //console.log("the Array data is ",AllFilesObj);
    main_form.append("fileInfo", JSON.stringify(AllFilesObj))
    console.log("main_form=",AllFilesObj)
    if(AllFilesObj && AllFilesObj.length>0) {
      for(let i=0; i<AllFilesObj.length; i++) {
        if(!AllFilesObj[i].category || !AllFilesObj[i].fileSource || !AllFilesObj[i].file_name) {
          Swal.fire('', 'Please add category with file upload', 'warning');
          return;
          break;
        }
      }
      
    }

    this.onCategoryPicked.emit(AllFilesObj);
  }

}
