import { Component, OnInit } from '@angular/core';
import Pensioner from 'src/app/Entity/Pensioner';
import { PensionerService } from 'src/app/Services/pensioner.service';

@Component({
  selector: 'app-add-pensioner',
  templateUrl: './add-pensioner.component.html',
  styleUrls: ['./add-pensioner.component.css']
})
export class AddPensionerComponent implements OnInit {
  title = "Fill out the form below";
  validForm = false;
  public pensioner: Pensioner={
    name:'',
    dob:'',
    pan:null,
    aadhaar:null,
    salary:null,
    allowances:null,
    selfOrFamily:'',
    bankDetails: {
      name: '',
      number: null,
      publicOrPrivate:''
    }
  };

  save()
  {
    
    console.log(this.pensioner);
    if(this.pensioner.name != "" && this.pensioner.dob != "" && this.pensioner.pan != null && this.pensioner.aadhaar != null && this.pensioner.salary != null &&
    this.pensioner.allowances != null && this.pensioner.selfOrFamily != "" && this.pensioner.bankDetails.name != "" && this.pensioner.bankDetails.number != null && this.pensioner.bankDetails.publicOrPrivate != "")
    {
    const observables = this.pensionerService.savePensioner(this.pensioner);
    observables.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
    alert("Pensioner successfully created");
    this.pensioner ={
      name:'',
      dob:'',
      pan:null,
      aadhaar:null,
      salary:null,
      allowances:null,
      selfOrFamily:'',
      bankDetails: {
        name: '',
        number: null,
        publicOrPrivate:''
      }
    }
    }
    else {
      alert("Please fill out all fields");
    }
  }

  constructor(private pensionerService: PensionerService) { }

  ngOnInit(): void {
  }

}
