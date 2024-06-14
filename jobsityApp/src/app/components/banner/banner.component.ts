import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronCircleDown, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  faChevronDown = faChevronDown;
  faStar = faStar;

  constructor(
    private router: Router
  ) { }

  gotoProgram() {
    this.router.navigate(['#program']);
  }
}
