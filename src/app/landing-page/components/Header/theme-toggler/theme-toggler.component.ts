import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
})
export class ThemeTogglerComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';
  themeClasses: string = this.getThemeClasses();

  ngOnInit() {
    this.loadInitialTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.updateBodyClass();
    this.themeClasses = this.getThemeClasses();
  }

  loadInitialTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.theme = savedTheme;
    } else {
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    this.updateBodyClass();
    this.themeClasses = this.getThemeClasses();
  }

  updateBodyClass(): void {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(this.theme);
    localStorage.setItem('theme', this.theme);
  }

  getThemeClasses(): string {
    return `flex items-center justify-center rounded-full cursor-pointer ${
      this.theme === 'dark'
        ? 'bg-dark-bg text-white'
        : 'bg-gray-200 text-black'
    } h-9 w-9 md:h-14 md:w-14`;
  }
}
