import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  phone=""
  date=""
  doctorName=""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={
      "name":this.name,
      "phone":this.phone,
      "date":this.date,
      "doctorName":this.doctorName

    }
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }


}
