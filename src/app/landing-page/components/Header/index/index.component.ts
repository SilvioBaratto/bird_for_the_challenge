import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: Menu[];
}

@Component({
  selector: 'app-header',
  templateUrl: './index.component.html',
})
export class HeaderComponent implements OnInit {

  menuData: Menu[] = [
    {
      id: 1,
      title: "About BIRD",
      path: "https://bird.ecb.europa.eu/projectDefinition",
      newTab: false,
    },
    {
      id: 2,
      title: "Navigator",
      path: "https://bird.ecb.europa.eu/nav",
      newTab: false,
    },
    {
      id: 3,
      title: "Metadata & Exports",
      path: "https://bird.ecb.europa.eu/cm",
      newTab: false,
    },
  ];

  navbarOpen = false;
  sticky = false;
  openIndex = -1;
  usePathName: string = '';

  constructor(private router: Router, private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.usePathName = this.router.url; // Get the current route path
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateMetaTags();
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  handleStickyNavbar() {
    this.sticky = window.scrollY >= 80;
  }

  handleSubmenu(index: number) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  isCurrentRoute(path: string): boolean {
    return this.router.url === path;
  }

  updateMetaTags() {
    let title = 'FantaCreator';
    let description = 'Create your custom fantasy games, play with friends, and share the excitement in your personalized fantasy league.';

    // Customize the title and description based on the current route
    if (this.router.url.includes('/about')) {
      title = 'About FantaCreator - Learn More About Us';
      description = 'Discover the mission and vision behind FantaCreator, the ultimate platform for custom fantasy games.';
    } else if (this.router.url.includes('/blog')) {
      title = 'FantaCreator Blog - Insights and Tips';
      description = 'Stay updated with the latest insights and tips from the FantaCreator blog, your go-to source for fantasy gaming.';
    }

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
