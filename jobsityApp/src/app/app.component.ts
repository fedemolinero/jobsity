import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProgramComponent } from './components/program/program.component';
import { SectionComponent } from './components/section/section.component';
import { ColumnsComponent } from './components/columns/columns.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    HeaderComponent,
    BannerComponent,
    ProgramComponent,
    SectionComponent,
    ColumnsComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobsityApp';
}
