import { Component, Input } from '@angular/core';
import { Blog } from '../../../../models/blog.model'; // Adjust the import path according to your structure


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
})
export class SingleBlogComponent {
  @Input() blog!: Blog;

  constructor() {
    // The @Input decorator allows this component to receive data from a parent component.
    // It's crucial to ensure the `blog` object is passed from the parent with the desired properties.
  }
}
