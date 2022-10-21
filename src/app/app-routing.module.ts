import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCvComponent} from "./list-cv/list-cv.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {DeleteCvComponent} from "./delete-cv/delete-cv.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {path: "list-cv",component:ListCvComponent},
  {path: "add-cv",component:AddCvComponent},
  {path: "delete-cv",component:DeleteCvComponent},
  {path: "signin",component:SignInComponent},
  {path: "signup",component:SignUpComponent},
  {path: '', redirectTo : 'add-cv', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
