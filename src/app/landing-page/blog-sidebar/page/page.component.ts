import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-sidebar-page',
  templateUrl: 'page.component.html',
})
export class BlogSidebarPageComponent implements OnInit {
  pageTitle: string = 'BIRD Project Blog | Insights on Regulatory Reporting and Financial Data';
  pageDescription: string = 'Explore the BIRD Project Blog for the latest tips, strategies, and insights on regulatory reporting and financial data management. Learn how the European Central Bank\'s BIRD initiative simplifies the reporting process for financial institutions and enhances compliance with regulatory standards.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({ name: 'keywords', content: 'BIRD Project, regulatory reporting, European Central Bank, financial data, compliance, data management, blog' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }
}
