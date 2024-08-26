import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the AuthService and other services
import { AboutPageComponent } from './landing-page/about/page/page.component';
import { BlogPageComponent } from './landing-page/blog/page/page.component';
import { BlogDetailsPageComponent } from './landing-page/blog-details/page/page.component';
import { BlogSidebarPageComponent } from './landing-page/blog-sidebar/page/page.component';
import { ContactPageComponent } from './landing-page/contact/page/page.component';
import { ErrorPageComponent } from './landing-page/error/page/page.component';
import { SignupComponent } from './landing-page/signup/page/page.component';
import { SigninComponent } from './landing-page/signin/page/page.component';

// Import other components
// Import your LayoutComponent
import { HomeComponent } from './landing-page/home/home.component';
import { AboutSectionOneComponent } from './landing-page/components/About/about-section-one/about-section-one.component';
import { AboutSectionTwoComponent } from './landing-page/components/About/about-section-two/about-section-two.component';
import { BlogListComponent } from './landing-page/components/Blog/blog-data/blog-data.component';
import { BlogComponent } from './landing-page/components/Blog/index/index.component';
import { RelatedPostComponent } from './landing-page/components/Blog/related-post/related-post.component';
import { SingleBlogComponent } from './landing-page/components/Blog/single-blog/single-blog.component';
import { SharePostComponent } from './landing-page/components/Blog/share-post/share-post.component';
import { TagButtonComponent } from './landing-page/components/Blog/tag-button/tag-button.component';
import { BrandListComponent } from './landing-page/components/Brands/brands-data/brands-data.component';
import { SingleBrandComponent } from './landing-page/components/Brands/index/index.component';
import { BreadcrumbComponent } from './landing-page/components/Common/breadcrumb/breadcrumb.component';
import { ScrollUpComponent } from './landing-page/components/Common/scroll-up/scroll-up.component';
import { SectionTitleComponent } from './landing-page/components/Common/section-title/section-title.component';
import { ContactComponent } from './landing-page/components/Contact/index/index.component';
import { NewsLatterBoxComponent } from './landing-page/components/Contact/news-latter-box/news-latter-box.component';
import { FeaturesComponent } from './landing-page/components/Features/index/index.component';
import { SingleFeatureComponent } from './landing-page/components/Features/single-feature/single-feature.component';
import { FooterComponent } from './landing-page/components/Footer/index/index.component';
import { HeaderComponent } from './landing-page/components/Header/index/index.component';
import { MenuComponent } from './landing-page/components/Header/menu-data/menu-data.component';
import { ThemeTogglerComponent } from './landing-page/components/Header/theme-toggler/theme-toggler.component';
import { HeroComponent } from './landing-page/components/Hero/index/index.component';
import { ScrollToTopComponent } from './landing-page/components/ScrollToTop/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    BlogPageComponent,
    BlogDetailsPageComponent,
    BlogSidebarPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    HomeComponent,
    AboutSectionOneComponent,
    AboutSectionTwoComponent,
    BlogListComponent,
    BlogComponent,
    RelatedPostComponent,
    SingleBlogComponent,
    SharePostComponent,
    TagButtonComponent,
    BrandListComponent,
    SingleBrandComponent,
    BreadcrumbComponent,
    ScrollUpComponent,
    SectionTitleComponent,
    ContactComponent,
    NewsLatterBoxComponent,
    FeaturesComponent,
    SingleFeatureComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ThemeTogglerComponent,
    HeroComponent,
    ScrollToTopComponent,  
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}