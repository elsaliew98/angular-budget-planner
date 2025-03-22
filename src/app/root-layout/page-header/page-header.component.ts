import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent implements OnInit{

  screenTitle:string = ""

  constructor(private route:Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.log(this.route)
      }
    })
  }

  toggleMenu() {
    const navpanelElement = document.querySelector(".nav-panel-wrapper")
    const pagefooter = document.querySelector(".page-footer-wrapper")
    navpanelElement?.classList.toggle("minimize")
    pagefooter?.classList.toggle("minimize")
  }
}
