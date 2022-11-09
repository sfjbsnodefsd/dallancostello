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
  public pensioner: Pensioner={
    name:'',
    dob:'',
    pan:0,
    aadhaar:0,
    salary:0,
    allowances:0,
    selfOrFamily:'',
    bankDetails: {
      name: '',
      number: 0,
      publicOrPrivate:''
    }
  };

  save()
  {
    console.log(this.pensioner);
    const observables = this.pensionerService.savePensioner(this.pensioner);
    observables.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  constructor(private pensionerService: PensionerService) { }

  ngOnInit(): void {
  }

}
