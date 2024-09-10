import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './page.component.html',
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
    agree: false
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Set the page title and meta description for better SEO
    this.titleService.setTitle('Sign Up | Join the BIRD Project for Simplified Regulatory Reporting');
    this.metaService.updateTag({
      name: 'description',
      content: 'Create your BIRD Project account to access tools for streamlined regulatory reporting, manage financial data, and stay compliant with the European Central Bank’s reporting standards.',
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'BIRD Project, sign up, create account, regulatory reporting, financial data, compliance, European Central Bank, financial institutions',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Sign Up for the BIRD Project | Streamline Your Regulatory Reporting',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Join the BIRD Project today to access tools that help financial institutions streamline regulatory reporting, manage financial data efficiently, and stay compliant with the European Central Bank standards.',
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }

  onSubmit() {
    if (this.user.agree) {
      this.apiService.signUpUser(this.user).subscribe(
        response => {
          console.log('User signed up successfully:', response);
          // Redirect to the BIRD Project dashboard after successful signup
          window.location.href = 'https://bird.ecb.europa.eu/dashboard';
        },
        error => {
          console.error('Error signing up user', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.error('You must agree to the terms and conditions');
    }
  }  
}
