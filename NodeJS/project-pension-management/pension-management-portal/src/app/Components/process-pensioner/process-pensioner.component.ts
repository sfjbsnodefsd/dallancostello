import { Component, OnInit } from '@angular/core';
import Pensioner from 'src/app/Entity/Pensioner';
import { PensionerService } from 'src/app/Services/pensioner.service';

@Component({
  selector: 'app-process-pensioner',
  templateUrl: './process-pensioner.component.html',
  styleUrls: ['./process-pensioner.component.css']
})
export class ProcessPensionerComponent implements OnInit {
  pensioners: Pensioner[] = [];
  pensionersCopy: Pensioner[] = [];
  pensioner = "";
  isProcessed = false;
  pensionAmount = 0;
  bankServiceCharge = 0;
  selectedPensioner = "";

  constructor(public pensionerService: PensionerService) { }

  ngOnInit(): void {
    
    const promise = this.pensionerService.getPensioners();
    promise.subscribe((response) => {
      console.log(response);
      this.pensioners = response as Pensioner[];
      this.pensionersCopy = this.pensioners;
     
       
        //this.count++;
      
    })
  }

  newPensioner(event) {
    console.log(event.target.value);
    //console.log(this.pensionersCopy)
    this.pensioner =  event.target.value;
    console.log(this.pensioner);
    this.pensioners = this.pensionersCopy;
    //console.log(this.pensioners);
    if (event.target.value == "All")
    {
      this.pensioners = this.pensionersCopy;

    }

    else if (event.target.value != "All")
    {
      var selectedPensioner = this.pensioners.filter(function (pensioner) {
        
        return pensioner.aadhaar == event.target.value;
        
        console.log(pensioner.aadhaar);
      })
      this.pensioners = selectedPensioner;
      

    
    }

    
      //console.log(this.pensioner);
    //   var promise = this.pensionerService.getPensionerByAadhaar(this.pensioner);
    //   promise.subscribe((response) => {
    //     console.log(response);
    //     this.pensioners = response as Pensioner[];
    //     //this.pensionersCopy = this.pensioners;
    // })

    

  
  }

  calcPension(pensioner:any, index:any){
    this.isProcessed = true;
    console.log(this.pensioner);
    this.selectedPensioner = this.pensioner;
    console.log(pensioner.aadhaar);
    // let pensionAmount = 0;
    // let bankServiceCharge = 0;
    if (pensioner.selfOrFamily == "Self")
    {
        this.pensionAmount = (pensioner.salary * 0.8) + pensioner.allowances
    }
    else if (pensioner.selfOrFamily == "Family")
    {
        this.pensionAmount = (pensioner.salary * 0.5) + pensioner.allowances
    }

    if (pensioner.bankDetails.publicOrPrivate == "Public")
    {
        this.bankServiceCharge = 500;
    }
    else if (pensioner.bankDetails.publicOrPrivate == "Private")
    {
        this.bankServiceCharge = 550;
    }
    //pensionAmount = newPensionAmount;
    console.log(this.pensionAmount);
    console.log(this.bankServiceCharge);
    alert("Details for "+pensioner.name+"\nPension Amount: "+this.pensionAmount+"\nBank Service Charge: "+this.bankServiceCharge);
  }

}
