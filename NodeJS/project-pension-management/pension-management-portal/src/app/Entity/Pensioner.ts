export default interface Pensioner {
    aadhaar:number;
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
     
    }
  
}