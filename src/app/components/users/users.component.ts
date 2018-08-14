import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  formUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    joined: new Date()
   };

  user: User[];
  disableButton: boolean = false;
  onSuccess: boolean = true;  // Issue in Angular not working
  onProcess: boolean = false;
  showForm: boolean = false;
  showExtended: boolean = false;
  currentClasses = {};
  data: any;
  @ViewChild('userForm') form: any;

  constructor(public UserService: UserService) { }
  onSubmit(userForm) {
    // this.user.unshift(userForm.value);
    this.UserService.addUsers(userForm.value);
  }

  removeUser(){
    this.user.pop();
  }
  ngOnInit() {
    // this.user = this.DataService.getUsers();
    // console.log(this.user);
    this.UserService.getUsers().subscribe(
      data => this.user = data,
      error => console.log(error)
);
  // this.DataService.getUsers().subscribe(function(data){
  //   return this.user = data;
  // }, function(error){
  //   console.log(error);
  // });
 }

}
