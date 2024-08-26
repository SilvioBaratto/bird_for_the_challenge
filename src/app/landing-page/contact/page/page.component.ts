import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './page.component.html',
})
export class ContactPageComponent implements OnInit {
  pageTitle: string = 'Contact Us | FantaCreator Support and Community Engagement';
  pageDescription: string = 'Get in touch with the FantaCreator team for support, feedback, or inquiries. We are here to help you enhance your fantasy gaming experience and connect with our community.';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, contact, support, fantasy gaming assistance, community engagement, customer service',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle,
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.pageDescription,
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
