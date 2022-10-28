import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cv } from '../Classes/cv';
import { CvService } from '../Services/cv.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  cv: Cv;
  cvs: Cv;
  prenom = '';
  cvvs?: Cv[];
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

}
