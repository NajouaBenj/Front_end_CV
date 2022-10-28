import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCvComponent } from "./list-cv/list-cv.component";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CheckCvComponent } from "./check-cv/check-cv.component";
import { PageAcceuilComponent } from "./page-acceuil/page-acceuil.component"
import { PublicComponent } from './public/public.component';
const routes: Routes = [
  { path: "list-cv", component: ListCvComponent },
  { path: "add-cv", component: AddCvComponent },
  { path: 'edit/:id', component: AddCvComponent },
  { path: 'get/:id', component: CheckCvComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "acceuil", component: PageAcceuilComponent },
  { path: "public", component: PublicComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
