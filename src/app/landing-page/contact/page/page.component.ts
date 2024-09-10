import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './page.component.html',
})
export class ContactPageComponent implements OnInit {
  pageTitle: string = 'Contact Us | BIRD Project Support and Inquiries';
  pageDescription: string = 'Get in touch with the BIRD Project team for support, feedback, or inquiries regarding regulatory reporting and data management. We are here to assist you with any questions about the European Central Bank’s BIRD initiative.';

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
      content: 'BIRD Project, contact, support, regulatory reporting assistance, European Central Bank, financial institutions, customer service',
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
