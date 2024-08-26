import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: string = 'light';

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      this.theme = savedTheme ? savedTheme : 'light';
      this.applyTheme(this.theme);
    }
  }

  toggleTheme(): void {
    if (this.isBrowser()) {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme(this.theme);
      localStorage.setItem('theme', this.theme);
    }
  }

  private applyTheme(theme: string): void {
    if (this.isBrowser()) {
      document.body.classList.toggle('dark', theme === 'dark');
    }
  }

  get currentTheme(): string {
    return this.theme;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
