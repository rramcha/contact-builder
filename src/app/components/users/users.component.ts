import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  User: User[];

  hideEle:boolean = true;
  buttonDisable:boolean = false;
  constructor() { }

  ngOnInit() {
     this.User = [{
        firstName: 'Ravi',
        lastName: 'Ram',
        age: 22,
        address: {
        street: '11 lawmover st',
        city: 'Bangalore',
        country: 'India'
        }
       }, {
        firstName: 'Vineet',
        lastName: 'Sharma',
        age: 30,
        address: {
        street: '34 wentworth Lane',
        city: 'Mysore',
        country: 'India'
        }
       }
     ];

    //this.User = [];
     this.addUser({
      firstName: 'Mithun',
      lastName: 'Chakra',
      age: 45,
      address: {
      street: '34 Dont Know Lane',
      city: 'Gujrat',
      country: 'India'
      }
     });
  }

    addUser(User: User){
      this.User.push(User);
      this.hideEle = false;
    }
}
