import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faCheck, faClock, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IncludesComponent } from './includes/includes.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    IncludesComponent,
    Tab1Component, Tab2Component, Tab3Component
  ],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  faStar = faStar;
  faClock = faClock;
  faCalendar = faCalendar;
  faIconCheck = faCheck;

  activeItem: string = 'basic';

  setActive(item: string) {
    this.activeItem = item;
  }

  selectedTab: number = 1;

  selectTab(tab: number) {
    this.selectedTab = tab;
  }

}
