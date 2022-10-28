import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../Services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  mode:number=0;

  constructor(private authService:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSignIn(user:any){
    this.authService.signIn(user).subscribe(resp=>{
      if(resp.body) {
        this.router.navigateByUrl('/acceuil');
      }
      else {
        this.router.navigateByUrl('/signin');
      }
    },error => this.mode=1);
  }

  onSignUp(){
    this.router.navigateByUrl('/signup')
  }

}
