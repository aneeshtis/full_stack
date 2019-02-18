import { Component, OnInit } from '@angular/core';

import { ServiceTestService } from '../../app/myservice/service-test.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {
  date:any;
  dt:any;
  myCookie;
  // msg:String;

  constructor(private ds:ServiceTestService, private ks:CookieService) { 
      this.date = this.ds.getCurrentDate();
      // this.msg = this.ds.validateDOB(this.dt);
  }

  ngOnInit() {
  }

  getCookie(){
    this.myCookie = this.ks.get("test");
    console.log(this.myCookie);
  }

}
