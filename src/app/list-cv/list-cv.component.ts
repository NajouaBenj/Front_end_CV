import { Component, OnInit } from '@angular/core';
import { CvService } from "../Services/cv.service";
import { Cv } from "../Classes/cv";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  cv: Cv;
  cvs: Cv;
  prenom = '';
  cvvs?: Cv[];
  currentTutorial: Cv = {};
  currentIndex = -1;

  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
   this.retrieveCvs();
  }
  retrieveCvs(): void {
    this.cvService.getAll()
      .subscribe({
        next: (data) => {
          this.cvvs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  getcv(idc: number) {
    this.router.navigate(['/get', idc]);
  }


  delete(id: number) {
    this.cvService.delete(id)
      .subscribe({
        next: (res) => {
          alert("Cv supprimé");
          this.retrieveCvs();
        },
        error: () => {
          alert("Cv non supprimé")
        }
      })
  }

  removeAllCvs(): void {
    this.cvService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
  editButtonClick(cvId: number) {
    this.router.navigate(['/edit', cvId]);
  }
  
}
