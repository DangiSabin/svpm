import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  data: [][];
  enableUpload:boolean;
  fileName;
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  

  Cancel(){
    alert("Cancel...");
    //add cancel data code here:
  }

  onFileChange(evt: any) {

    try{
    const target : DataTransfer =  <DataTransfer> (evt.target);
    
    this.enableUpload = false;

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    this.fileName = evt.target.files[0].name; 
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      console.log(this.data);
      this.enableUpload=true;


    };
    reader.readAsBinaryString(target.files[0]);
  }
  catch(error){
    console.log('Error reading uploaded file. See below msg for details : \n');
    console.log(error);
  }
  
  }

  Upload(){
    alert("Upload data...");
    //add upload data code here:
    
        try {
          this.userService.upload(this.fileName).subscribe(data=>{
            //this.user=data;
            console.log('Upload success!');
          },error=>console.log(error));
        } catch (e) {
            console.log('Error occured while posting uploaded file. See below message for details : \n');
            console.log(e);
        }
    }
}

