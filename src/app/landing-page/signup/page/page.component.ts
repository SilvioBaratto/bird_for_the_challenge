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
    this.titleService.setTitle('Sign Up | Join FantaCreator for Custom Fantasy Leagues');
    this.metaService.updateTag({
      name: 'description',
      content: 'Create your FantaCreator account to start building custom fantasy leagues, connect with friends, and enjoy a personalized gaming experience.',
    });

    // Additional meta tags for SEO optimization
    this.metaService.updateTag({
      name: 'keywords',
      content: 'FantaCreator, sign up, create account, fantasy leagues, custom gaming, community, personalized experience',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Sign Up for FantaCreator | Build Custom Fantasy Leagues',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Join FantaCreator today to create your own fantasy leagues, invite friends, and customize your gaming experience across various sports and activities.',
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
          // Redirect to web.fantacreator.com after successful signup
          window.location.href = 'https://web.fantacreator.com';
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
