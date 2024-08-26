import { Component } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-news-latter-box',
  templateUrl: './news-latter-box.component.html',
})
export class NewsLatterBoxComponent {
  theme: string = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.currentTheme;  // Use the getter to access the theme
  }

  getStopColor(): string {
    return this.theme === 'light' ? '#4A6CF7' : '#fff';
  }

  getGradientFill(): string {
    return 'url(#paint0_linear_1028_600)';
  }
}
