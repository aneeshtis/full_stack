import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name:String = "hhh";
  age:Number;
  email;
  address:{Street:String, City:String};
  hobbies:String[];
  sampleJson;
  show1:boolean = true;
  show2:boolean = false;
  txtValue;
  txtHobby;
  productArray;
  cartArray= [];
  total = 0;

  constructor() { }

  ngOnInit() {
    this.name = "Arun";
    this.age = 30;
    this.email = "nikhil@gmnail.com";
    this.address = {Street:"Line1", City: "Alpy"};
    this.sampleJson = [
      {"id": "c1", "cars": "Ford"},
      {"id": "c2", "cars": "Ford2"},
      {"id": "c3", "cars": "Ford3"},
    ];
    this.productArray = [
      {"id": "001", "name": "Pro1", "price": 23000},
      {"id": "002", "name": "Pro2", "price": 44444},
      {"id": "003", "name": "Pro3", "price": 56545},
      {"id": "004", "name": "Pro4", "price": 34444}
    ];
  }

  addCart(name,price){
    let item = {"Name":name, "Price": price};
    this.cartArray.push(item);
    this.total = this.total + item.Price;
  }

  delCart(name,price){
   for(var i=0; i<this.cartArray.length; i++)
   {
     if(this.cartArray[i].Name == name)
     {
        this.total = this.total -  price;
        this.cartArray.splice(i,1);
        break;
     }
   }
  }

  setName(){
    this.name = this.txtValue;
  }

  setHobby(){
    this.hobbies.push(this.txtHobby);
  }

  delHobby(){
    this.hobbies.pop();
  }

  removeOneHb(i:number){
    this.hobbies.slice(i,1);
  }

  addHobby(){
    this.name = "Aneesh";
    this.hobbies.push("Hobby6", "Hobby7", "Hobby8")
  }

  removeHobby(){
    this.hobbies.pop();
  }

  showHobby(){
    this.hobbies = ["Hobby1", "Hobby2", "Hobby3"];
    this.show1 = false;
    this.show2 = true;
  }

  hideHobby(){
    this.hobbies = [];
    this.show1 = true;
    this.show2 = false;
  }
}
