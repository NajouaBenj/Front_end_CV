import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToCvsList() {
    this.router.navigate(["public"]);
  }
  goToadd() {
    this.router.navigate(["add-cv"]);
  }
}
