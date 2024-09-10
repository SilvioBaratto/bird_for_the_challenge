import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './page.component.html',
})
export class BlogPageComponent implements OnInit {
  pageTitle: string = 'BIRD Project Blog | Latest Insights on Regulatory Reporting and Financial Data';
  pageDescription: string = 'Welcome to the BIRD Project Blog, your source for the latest updates, strategies, and insights on regulatory reporting. Discover how the European Central Bank\'s BIRD initiative is helping financial institutions streamline their reporting processes and stay compliant with regulatory requirements.';

  blogs: Blog[] = [];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
    // Set the page title and meta description for better SEO
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'BIRD Project, regulatory reporting, financial institutions, European Central Bank, compliance, data dictionary, reporting standards, blog',
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
