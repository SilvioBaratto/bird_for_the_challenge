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
    this.titleService.setTitle("BIRD Project | Simplifying Regulatory Reporting for Financial Institutions");
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Welcome to the BIRD Project, an initiative by the European Central Bank aimed at simplifying and standardizing regulatory reporting for financial institutions. Learn how BIRD improves data quality and reduces reporting costs.' 
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'BIRD Project, regulatory reporting, financial data, European Central Bank, data management, compliance, financial institutions',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'BIRD Project | Streamlining Regulatory Reporting',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Discover how the BIRD Project by the European Central Bank is helping financial institutions simplify and enhance their regulatory reporting processes, ensuring compliance and reducing costs.',
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
