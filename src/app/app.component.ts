import { Component } from '@angular/core';
import { LoginSerive } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';

  // constructor(private loginSerive: LoginSerive) {
  //   console.log("going to hit service");
  //   //this.loginSerive.getUserDetails('Xebia.test2', 'Spice@123');
  // }

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  constructor() { }

  ngOnInit() {
    this.records = [
      { CategoryID: 1, CategoryName: "Beverages", Description: "Coffees, teas" },
      { CategoryID: 2, CategoryName: "Condiments", Description: "Sweet and savory sauces" },
      { CategoryID: 3, CategoryName: "Confections", Description: "Desserts and candies" },
      { CategoryID: 4, CategoryName: "Cheeses", Description: "Smetana, Quark and Cheddar Cheese" },
      { CategoryID: 5, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
      { CategoryID: 6, CategoryName: "Beverages", Description: "Beers, and ales" },
      { CategoryID: 7, CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
      { CategoryID: 8, CategoryName: "Confections", Description: "Sweet breads" },
      { CategoryID: 9, CategoryName: "Cheeses", Description: "Cheese Burger" },
      { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
    ];
    // this.sort(this.column);
  }

  // Declare local variable
  direction: number;
  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
}
