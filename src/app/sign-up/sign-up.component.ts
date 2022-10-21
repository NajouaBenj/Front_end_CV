import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../Services/authentification.service";
import {Router} from "@angular/router";
import {User} from "../Classes/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }


  save(user:any){
    this.authService.signUp(user).subscribe(resp=>{
      this.router.navigateByUrl('/signin');
    },error => console.log(error));
  }

}
