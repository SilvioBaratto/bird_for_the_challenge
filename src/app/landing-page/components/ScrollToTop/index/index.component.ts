import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './index.component.html',
})
export class ScrollToTopComponent {
  isVisible = false;

  // Method to scroll to the top
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isVisible = window.pageYOffset > 300;
  }
}
