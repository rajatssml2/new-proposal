import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public documentGrp: any;
  public totalfiles: Array<File> =[];
  public totalFileName = [];
  public lengthCheckToaddMore =0;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.documentGrp = this.formBuilder.group({
      category: '',
      documentFile:new FormControl(File),

      items: this.formBuilder.array([this.createUploadDocuments()])
    });
  }

  createUploadDocuments(): FormGroup {
    return this.formBuilder.group({
      category: '',
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
if( this.items.value[0].category != "" && ((this.lengthCheckToaddMore) === (this.totalfiles.length)) )
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
        'category' : element.category,
        'file_name' : this.totalFileName[index]
      }
      AllFilesObj.push(eachObj); 
    });

    //console.log("the Array data is ",AllFilesObj);
    main_form.append("fileInfo",JSON.stringify(AllFilesObj))

    
  }

}
