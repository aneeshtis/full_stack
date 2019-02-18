import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  name: string = "Nikhil";
  age: number = 25;
  email = "aneesh@gmail.com";
  address:string = "My Address";
}
