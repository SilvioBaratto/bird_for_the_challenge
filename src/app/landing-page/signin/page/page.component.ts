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
    this.titleService.setTitle('Sign In | Access Your FantaCreator Account');
    this.metaService.updateTag({
      name: 'description',
      content: 'Sign in to your FantaCreator account to manage your fantasy leagues, connect with friends, and customize your gaming experience.',
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, sign in, login, fantasy leagues, manage account, gaming platform, community engagement',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Sign In to FantaCreator | Manage Your Fantasy Leagues',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Access your FantaCreator account to create and manage custom fantasy leagues, connect with the community, and enhance your gaming experience.',
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
        // Redirect to web.fantacreator.com after successful login
        window.location.href = 'https://web.fantacreator.com';
      },
      error => {
        console.error('Error logging in user', error);
        // Handle error (e.g., show an error message)
      }
    );
  }  
}
