import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './Model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostsService) {}
  ngOnInit(): void {
    this.service.getPosts().then(() => {
      this.posts = this.service.posts;
    });
    this.posts = this.service.posts;
  }
}
