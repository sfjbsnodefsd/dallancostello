import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = "http://localhost:5001/allpensioners"

@Injectable({
  providedIn: 'root'
})
export class PensionerService {
  // saveUser(user:{name:String,age:number,
  // gender:String}) {
  //   return this.http.post(BASE_URL, user);
  // }

  getPensioners() {
    return this.http.get(BASE_URL);
  }

  

  constructor(private http:HttpClient) { }
}
