import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { DeleteCvComponent } from './delete-cv/delete-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import {HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    UpdateCvComponent,
    DeleteCvComponent,
    ListCvComponent,
    SignInComponent,
    SignUpComponent
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
