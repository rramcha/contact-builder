import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[];
  data: Observable<any>;
  constructor() {

    

    this.user = [
      {
        firstName: 'Ravi',
        lastName: 'chandra',
        email: 'ravi@gmail.com',
        isActive: true,
        show: true,
        joined: new Date()
       },
       {
        firstName: 'Satish',
        lastName: 'Mishra',
        email: 'satish@gmail.com',
        isActive: false,
        show: true,
        joined: new Date()
       },
       {
        firstName: 'Vinod',
        lastName: 'Sharma',
        email: 'vinod@gmail.com',
        isActive: false,
        show: false,
        joined: new Date()
        }
    ];

  }

    
  //  getUsers() {
  //    console.log('Service invoked!!!');
  //   return this.user;
  // }

  // Using observables
  getUsers(): Observable<User[]> {
    console.log('Service invoked!!!');
   return of(this.user);
 }


  addUsers(val){
    this.user.unshift(val);
  }

}
