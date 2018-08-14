import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string;
  lastName: string;
  age: number;
  address;
  surName: any;
  numArr: number[];
  strArr: string[];
  mixedArr: any[];
  myTuple = ['string', 'boolean', 'number'];

  // Interface
  user: User;

  constructor() {}

ngOnInit() {
  this.user = {
    firstName: 'Ravi',
    lastName: 'indra',
    email: 'ravi@gmail.com'
   };
}
}
