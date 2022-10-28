import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../Services/authentification.service";
import {Router} from "@angular/router";
import {User} from "../Classes/user";
import { FormsModule }   from '@angular/forms';

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

  annuler(){
      this.router.navigateByUrl('/signin');

  }
  save(user:any){
    this.authService.signUp(user).subscribe(resp=>{
      this.router.navigateByUrl('/signin');
    },error => console.log(error));
  }

}
