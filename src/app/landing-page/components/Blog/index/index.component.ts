import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { Blog } from '../../../../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './index.component.html',
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}