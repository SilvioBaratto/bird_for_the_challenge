import { Injectable } from '@angular/core';

export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuDataService {
  private menuData: Menu[] = [
    {
      id: 1,
      title: 'Home',
      path: '/',
      newTab: false,
    },
    {
      id: 2,
      title: 'About',
      path: '/about',
      newTab: false,
    },
    {
      id: 33,
      title: 'Blog',
      path: '/blog',
      newTab: false,
    }
  ];

  getMenuData(): Menu[] {
    return this.menuData;
  }
}
