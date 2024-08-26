import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.component.html',
})
export class RelatedPostComponent {
  @Input() image: string = '';
  @Input() slug: string = '';
  @Input() title: string = '';
  @Input() date: string = '';

  constructor(private router: Router) {}

  navigateToPost() {
    this.router.navigate([this.slug]);
  }
}

