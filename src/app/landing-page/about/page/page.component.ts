import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './page.component.html',
})
export class AboutPageComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle('About FantaCreator | Leading Fantasy Gaming Platform');
    this.metaService.updateTag({
      name: 'description',
      content: 'Discover FantaCreator, the ultimate fantasy gaming platform designed for university students. Customize your own fantasy leagues, engage with friends, and enjoy a personalized gaming experience across various sports and activities.',
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, fantasy gaming, customizable leagues, university students, Italy, social gaming, mobile app',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'FantaCreator - Leading Fantasy Gaming Platform',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Join FantaCreator and create your own fantasy leagues with friends. Enjoy a unique and customizable gaming experience tailored to your interests.',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.fantacreator.com/about', // Replace with the actual URL
    });
  }
}
