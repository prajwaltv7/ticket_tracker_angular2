import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private userLoginService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

   User : User = new User();

   login(){
    this.userLoginService.login().subscribe(
      userStatus=>{
        if( userStatus!=null){
          alert("LOGIN SUCCESS")
        alert("LOGIN FAIL")
      
        }
      }
    )
  }

}
