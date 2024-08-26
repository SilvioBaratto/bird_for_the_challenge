import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogData: Blog[] = [
    {
      id: 1,
      title: 'BIRD Transformation Rules 1.2 and new simplified exports are now published',
      paragraph:
        'Logical Transformation Rules lineage for BIRD Derivations and Forward engineering phases have been published. Furthermore, two new simplified exports have been released: Framework models overview and Framework logical lineage.',
      image: '/assets/images/blog/fantasports.webp',
      author: {
        name: 'Andrea Novello',
        image: '/assets/images/blog/author-02.png',
        designation: 'Senior Economist',
      },
      tags: ['Transformation Rules', 'Forward Engineering'],
      publishDate: '2024',
    },    
    {
      id: 2,
      title: 'The July BIRD newsletter is out!',
      paragraph:
        'You can find the latest edition of the BIRD newsletter in the Documentation section (About BIRD).',
      image: '/assets/images/blog/fantauniversity.webp',
      author: {
        name: 'Maria Henriquez',
        image: '/assets/images/blog/author-01.png',
        designation: 'Research Analyst',
      },
      tags: ['Newsletter', 'Documentation'],
      publishDate: '2024',
    },    
    {
      id: 3,
      title: 'BIRD Transformation Rules 1.1.1 and lineage APIs are now published',
      paragraph:
        'BIRD Transformation Rules for FINREP are now improved. Furthermore, new BIRD APIs for Logical Transformation Rules and related lineage are now released (incomingLogicalLineages and incomingRenderingLogicalLineages endpoints).',
      image: '/assets/images/blog/fantadate.webp',
      author: {
        name: 'Fabio Camerota',
        image: '/assets/images/blog/author-03.png',
        designation: 'Research Analyst',
      },
      tags: ['Transformation Rules', 'APIs'],
      publishDate: '2024',
    },    
  ];

  getBlogs(): Blog[] {
    return this.blogData;
  }
}
