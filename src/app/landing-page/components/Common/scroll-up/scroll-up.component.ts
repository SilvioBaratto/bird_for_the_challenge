import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-up',
  template: '', // Assuming there's no visual content, or provide appropriate template
})
export class ScrollUpComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (document.scrollingElement) {
        document.scrollingElement.scrollTo(0, 0);
      }
    }
  }
}
