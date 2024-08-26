import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-sidebar-page',
  templateUrl: 'page.component.html',
})
export class BlogSidebarPageComponent implements OnInit {
  pageTitle: string = 'FantaCreator Blog | Insights on Fantasy Gaming and Custom Leagues';
  pageDescription: string = 'Explore the FantaCreator Blog for the latest tips, strategies, and insights on creating and managing custom fantasy leagues. Engage with content tailored for fantasy gaming enthusiasts and discover how to enhance your gaming experience.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({ name: 'keywords', content: 'FantaCreator, fantasy gaming blog, custom leagues, fantasy sports, gaming tips, league management' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }
}
