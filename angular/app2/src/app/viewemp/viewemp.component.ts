import { Component, OnInit } from '@angular/core';

import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  myCookie;
  myLs;
  mySess;
  name1;
  breed;
  myJson:{};
  mySessData;
  constructor(private ks:CookieService) { }

  ngOnInit() {
  }

  getCookie(){
    this.myCookie = this.ks.get("test");
    console.log(this.myCookie);
  }

  setCookie(){
    this.ks.put("test", "Sample Cookie!!");
    console.log("Cookie Set");
  }

  setLs(){
    localStorage.setItem("test_ls","Local Storage Item");
    console.log("Local Storage Set");
  }

  getLs(){
    this.myLs = localStorage.getItem("test_ls");
  }

  setSession(){
    sessionStorage.setItem("pro","Moto Z");
    console.log("Session Storage Set");
  }

  getSession(){
    this.mySess = sessionStorage.getItem("pro");
  }

  getData(){
    this.mySessData = JSON.parse(sessionStorage.getItem("dog"));
  }

  setData(){
    this.myJson = { "name":this.name1, "breed": this.breed };
    sessionStorage.setItem("dog", JSON.stringify(this.myJson));
    console.log("Session Storage For Dog");
  }

}
