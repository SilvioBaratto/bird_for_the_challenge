import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private brandsData: Brand[] = [
    {
      id: 6,
      name: 'Formbold',
      href: 'https://formbold.com',
      image: '/assets/images/brands/formbold.svg',
      imageLight: '/assets/images/brands/formbold-light.svg',
    },
    {
      id: 1,
      name: 'UIdeck',
      href: 'https://uideck.com',
      image: '/assets/images/brands/uideck.svg',
      imageLight: '/assets/images/brands/uideck-light.svg',
    },
    {
      id: 2,
      name: 'Tailgrids',
      href: 'https://tailgrids.com',
      image: '/assets/images/brands/tailgrids.svg',
      imageLight: '/assets/images/brands/tailgrids-light.svg',
    },
    {
      id: 3,
      name: 'Lineicons',
      href: 'https://lineicons.com',
      image: '/assets/images/brands/lineicons.svg',
      imageLight: '/assets/images/brands/lineicons-light.svg',
    },
    {
      id: 4,
      name: 'Tailadmin',
      href: 'https://tailadmin.com',
      image: '/assets/images/brands/tailadmin.svg',
      imageLight: '/assets/images/brands/tailadmin-light.svg',
    },
    {
      id: 5,
      name: 'PlainAdmin',
      href: 'https://plainadmin.com',
      image: '/assets/images/brands/plainadmin.svg',
      imageLight: '/assets/images/brands/plainadmin-light.svg',
    },
  ];

  getBrands(): Brand[] {
    return this.brandsData;
  }
}
