import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  phoneno=""
  date=""
  doctorName=""

  constructor(private api:ApiService,private route:Router){}

  readValue=()=>{
    let data:any={
      "name":this.name,
      "phoneno":this.phoneno,
      "date":this.date,
      "doctorName":this.doctorName

    }
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.name=""
      this.phoneno=""
      this.date=""
      this.doctorName=""
      this.route.navigate(['/view'])
    
  }


}
