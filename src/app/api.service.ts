import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPatient=(data:any)=>{
    return this.http.post("",data)
  }
  fetchPatient=()=>{
    return this.http.get("")
  }
}
