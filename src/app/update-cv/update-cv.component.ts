import { Component, OnInit } from '@angular/core';
import {CvService} from "../Services/cv.service";
import {Cv} from "../Classes/cv";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  cv:any;
  //@ts-ignore
  idc:number;

  constructor(private cvService:CvService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idc=this.activatedRoute.snapshot.params['idc'];
    this.cvService.getCvById(this.idc).subscribe(data=>{
      this.cv=data;
    })
  }

  onSubmit(){
    this.cvService.updateCv(this.idc,this.cv).subscribe(data=>{
      this.goToCvsList();
    },error => console.log(error));
  }

  goToCvsList(){
    this.router.navigate(["list-cv"])
  }

}
