import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-single-feature',
  templateUrl: './single-feature.component.html',
})
export class SingleFeatureComponent {
  @Input() title: string = '';
  @Input() paragraph: string = '';
  private _icon: string = '';

  iconHtml: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set icon(value: string) {
    this._icon = value;
    this.iconHtml = this.sanitizer.bypassSecurityTrustHtml(this._icon);
  }
}
