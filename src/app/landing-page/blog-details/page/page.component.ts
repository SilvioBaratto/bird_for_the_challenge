import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './page.component.html',
})
export class BlogDetailsPageComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private BlogService: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.BlogService.getBlogs();
  }
}
