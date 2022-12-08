import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService,private route:Router){}
  name=""
  searchPatient:any=[]
  readValues=()=>{
    let data:any={
      "name":this.name
    }
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response:any)=>{
        console.log(data)
        if (response.length==0) {
          alert("Invalid patient")
          
        } else {
          this.searchPatient=response
          
        }
      }
    )
   
  }
  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deletePatient(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
        alert("Patient deleted successfully")
        this.route.navigate(["/search"])
        this.searchPatient=[]
        this.name=""
        }
        else{
          alert("patient not found")

        }
      }
    )

}
}
