import { Component, OnInit } from '@angular/core';

import { ServiceTestService } from '../../app/myservice/service-test.service';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {
  date:any;
  dt:any;
  // msg:String;

  constructor(private ds:ServiceTestService) { 
      this.date = this.ds.getCurrentDate();
      // this.msg = this.ds.validateDOB(this.dt);
  }

  ngOnInit() {
  }

}
