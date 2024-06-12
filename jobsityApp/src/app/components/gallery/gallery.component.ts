import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  customOptions: OwlOptions = {
    navText: ['PREV', 'NEXT'],
    center: true,
    items: 2,
    loop: true,
    dots:false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,
    nav: true,
    autoplay: true,
    rtl: true,
    skip_validateItems: true,
    navSpeed: 700,
    responsive: {
      600: {
        items: 4
      }
    }
  }
}
