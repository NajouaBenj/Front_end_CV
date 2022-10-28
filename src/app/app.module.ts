import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import {HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckCvComponent } from './check-cv/check-cv.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PublicComponent } from './public/public.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    ListCvComponent,
    SignInComponent,
    SignUpComponent,
    CheckCvComponent,
    PageAcceuilComponent,
    PublicComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
