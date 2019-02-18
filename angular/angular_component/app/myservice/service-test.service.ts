import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  date1;
  constructor() { }

  getCurrentDate(){
    return new Date();
  }

  // validateDOB(date2){
  //   // this.date1 = new Date();
  //   // if (this.date1 > date2) {
  //   //     return "dfgd";
  //   // } else {
  //   //     return "rgrgf"; 
  //   // }
  //   return "sdsd";
  // }

}
