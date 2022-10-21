import { Component, OnInit } from '@angular/core';
import {CvService} from "../Services/cv.service";
import {Cv} from "../Classes/cv";
import {Router} from "@angular/router";
@Component({
  selector: 'app-delete-cv',
  templateUrl: './delete-cv.component.html',
  styleUrls: ['./delete-cv.component.css']
})
export class DeleteCvComponent implements OnInit {

  cvList:any;
  cv:Cv=new Cv();

  constructor(private cvService:CvService,private router:Router) { }

  ngOnInit(): void {
  }

  private getCvs() {
    this.cvService.getCvs().subscribe(data => {
      this.cvList = data;
    })
  }

  deleteCv(idc: number) {
    this.cvService.deleteCv(idc).subscribe(data => {
      console.log(data)
      this.getCvs();
    })

  }

}
