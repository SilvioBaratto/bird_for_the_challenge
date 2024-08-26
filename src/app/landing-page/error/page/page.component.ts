import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './page.component.html',
})
export class ErrorPageComponent implements OnInit {
  pageTitle: string = 'Oops! Something Went Wrong | FantaCreator';
  pageDescription: string = 'Sorry, the page you are looking for could not be found. Explore FantaCreator for customizable fantasy gaming experiences and reconnect with your leagues and community.';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, error page, page not found, fantasy gaming, custom leagues, reconnect, home page',
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

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
