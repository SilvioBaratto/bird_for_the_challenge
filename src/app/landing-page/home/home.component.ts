import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle("FantaCreator | Create Your Custom Fantasy Leagues");
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Welcome to FantaCreator, the ultimate platform for creating and managing custom fantasy leagues. Engage with friends, customize your experience, and explore a variety of sports and activities tailored to your interests.' 
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, fantasy leagues, custom fantasy sports, gaming platform, social gaming, create leagues, manage leagues',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'FantaCreator | Custom Fantasy Leagues for All Sports',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Join FantaCreator and start building your own fantasy leagues. Customize rules, invite friends, and enjoy a unique gaming experience across various sports and activities.',
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
