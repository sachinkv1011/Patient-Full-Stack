import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPatient=(data:any)=>{
    return this.http.post("http://localhost:8080/addpatient",data)
  }
  fetchPatient=()=>{
    return this.http.get("http://localhost:8080/viewpatient")
  }
  searchPatient=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
  deletePatient=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
