import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
}
