import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDarkMode = false;

  // Toggle dark mode based on user action or system preference
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
