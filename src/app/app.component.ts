import { Component } from '@angular/core';
import {AuthentificationService} from "./Services/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CvFront';

  constructor(public authentificationService:AuthentificationService) {
  }
}
