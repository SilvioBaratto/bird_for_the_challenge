import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './index.component.html',
})
export class FooterComponent {
  sticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Assuming that the sticky class is added based on a scroll threshold
    const threshold = 100; // Change this value as needed
    this.sticky = window.pageYOffset > threshold;
  }
}
