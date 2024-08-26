import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { SignupComponent } from './landing-page/signup/page/page.component';
import { SigninComponent } from './landing-page/signin/page/page.component';
import { AboutPageComponent } from './landing-page/about/page/page.component';
import { BlogPageComponent } from './landing-page/blog/page/page.component';
import { BlogSidebarPageComponent } from './landing-page/blog-sidebar/page/page.component';
import { BlogDetailsPageComponent } from './landing-page/blog-details/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Load HomeComponent for the root path
  },
  {
    path: 'signin',
    component: SigninComponent, // Load SignInComponent for the '/signin' path
  },
  {
    path: 'signup',
    component: SignupComponent, // Load SignUpComponent for the '/signup' path
  },
  {
    path: 'about',
    component: AboutPageComponent, // Load AboutPageComponent for the '/about' path
  },
  {
    path: 'blog',
    component: BlogPageComponent, // Load BlogPageComponent for the '/blog' path
  },
  {
    path: 'blog-sidebar',
    component: BlogSidebarPageComponent, // Load BlogSidebarPageComponent for the '/blog-sidebar' path
  },
  {
    path: 'blog-details',
    component: BlogDetailsPageComponent, // Load BlogDetailsPageComponent for the '/blog-details' path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
