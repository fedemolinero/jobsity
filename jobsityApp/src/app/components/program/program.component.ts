import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faCheck, faClock, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [FontAwesomeModule],
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
}
