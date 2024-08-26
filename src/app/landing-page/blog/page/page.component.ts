import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './page.component.html',
})
export class BlogPageComponent implements OnInit {
  pageTitle: string = 'FantaCreator Blog | Latest Insights on Fantasy Gaming and Custom Leagues';
  pageDescription: string = 'Welcome to the FantaCreator Blog, your go-to source for the latest insights, strategies, and tips on fantasy gaming. Learn how to create custom leagues, optimize your gaming experience, and engage with a community of like-minded enthusiasts.';

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
      content: 'FantaCreator, fantasy gaming, custom leagues, gaming strategies, blog, fantasy sports, community engagement',
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