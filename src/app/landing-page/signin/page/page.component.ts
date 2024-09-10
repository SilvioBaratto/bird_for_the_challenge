import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './page.component.html',
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Set the title and meta description for better SEO
    this.titleService.setTitle('Sign In | Access Your BIRD Project Account');
    this.metaService.updateTag({
      name: 'description',
      content: 'Sign in to your BIRD Project account to manage your regulatory reporting data, access the latest updates, and streamline your financial reporting process.',
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'BIRD Project, sign in, login, regulatory reporting, financial institutions, compliance, European Central Bank, manage account',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Sign In to BIRD Project | Manage Your Regulatory Reporting',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Access your BIRD Project account to manage regulatory reporting, streamline compliance, and ensure up-to-date financial data management.',
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }

  onSubmit() {
    this.apiService.loginUser({
      email: this.user.email,
      password: this.user.password,
    }).subscribe(
      response => {
        console.log('User logged in successfully:', response);
        // Redirect to the relevant BIRD Project dashboard after successful login
        window.location.href = 'https://bird.ecb.europa.eu/dashboard';
      },
      error => {
        console.error('Error logging in user', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
