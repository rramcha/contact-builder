import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: [`
    h2{
        color:red;
    }
    `]
  })

export class UserComponent implements OnInit {
    User: User;
    constructor() {
    }

    ngOnInit() {
        this.User = {
            firstName: 'Ravi',
            lastName: 'Ram',
            age: 22,
            address: {
            street: '11 lawmover st',
            city: 'Bangalore',
            country: 'India'
            }
        };
    }
}


