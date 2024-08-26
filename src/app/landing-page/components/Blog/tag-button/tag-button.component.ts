import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
})
export class TagButtonComponent {
  @Input() href: string = '#0';
  @Input() text: string = '';
}
