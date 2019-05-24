import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'Hello World!';

  age: number = 900000;
  isShown: string = "I am being shown";
  isNotShown: string = "I am not being shown";


  person: object = {
    name: "Jacob",
    age: 25,
    course: "Angular"
  };

  colors: string[] = [
    'Black',
    'Red',
    'Purple'
  ]

  people: object[] = [
    {
      name: "Roy",
      age: 25,
      course: "Angular"
    },
    {
      name: "Joe",
      age: 26,
      course: "Angular"
    },
    {
      name: "Chris",
      age: 45,
      course: "Angular"
    }
  ]

  myFunction(shouldShow: boolean): string {
    return shouldShow ? this.isShown : this.isNotShown;
  }
}
