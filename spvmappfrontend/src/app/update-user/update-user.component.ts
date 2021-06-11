import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:User;
  id:number;
  constructor(private userService:UserService,
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.userService.updateUserById(this.id,this.user).subscribe(data=>{
      this.gotoUserList();
    },error=>console.log(error));
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }

}
