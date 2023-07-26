import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './Model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [];

  constructor(private service: PostsService) {
    this.service.getPosts().then(() => {
      this.posts = this.service.posts;
    });
    this.posts = this.service.posts;
    console.log(this.posts);
  }
}
