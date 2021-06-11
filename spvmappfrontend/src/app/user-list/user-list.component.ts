import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];
  p:number=1;

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {

    this.getUsers();
   /* this.users=[{
      "id":1,
        "name":"Nabin Dahal",
        "serial_num":"1941076519",
        "curr_count":"9"
    },
    {
      "id":3,
      "name":"Sagar Tamang",
      "serial_num":"8910",
      "curr_count":"3"
    },
    {
      "id":4,
      "name":"Anil Karki",
      "serial_num":"19410765a",
      "curr_count":"5"
    }];*/
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users=data;
    });
  }

   userDetails(id:number){
    this.router.navigate(['user-details',id]);
  }

  updateUser(id:number){
    this.router.navigate(['update-user',id]);
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data);
      this.getUsers();
    },error=>console.log(error));
  }
}
