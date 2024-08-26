import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { Blog } from '../../../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-data.component.html',
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
