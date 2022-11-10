import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL1 = "http://localhost:5001/allpensioners";
const BASE_URL3 = "http://localhost:5001/pensioner/create";
const BASE_URL4 = "http://localhost:5001/delete";



@Injectable({
  providedIn: 'root'
})
export class PensionerService {
  // saveUser(user:{name:String,age:number,
  // gender:String}) {
  //   return this.http.post(BASE_URL, user);
  // }
  baseurl2 = "http://localhost:5001/pensioner/";

  getPensioners() {
    return this.http.get(BASE_URL1);
  }

  getPensionerByAadhaar(aadhaar) {
    this.baseurl2 = this.baseurl2.concat(aadhaar);
    return this.http.get(this.baseurl2);
  }

  savePensioner(pensioner:{aadhaar:number;
    name:String;
    dob:String ;
    pan:number ;
    salary:number;
    allowances:number;
    selfOrFamily:String;
    bankDetails: {
        name: String;
        number: Number;
        publicOrPrivate: String;
     
    }}) {
      return this.http.post(BASE_URL3, pensioner);
    }

    deletePensioner(pensioner, index) {
      return this.http.delete(BASE_URL4+'/'+ pensioner.aadhaar);
    }

  

  constructor(private http:HttpClient) { }
}
