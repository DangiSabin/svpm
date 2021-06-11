import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user:User=new User();
  constructor( private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.gotoUserList();

    },
    error=>console.log(error));
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
   
  }

}
