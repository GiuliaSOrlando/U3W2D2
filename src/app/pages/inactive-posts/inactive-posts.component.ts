import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  posts: Post[] = this.inactivePosts();
  constructor(private service: PostsService) {}
  inactivePosts() {
    return this.service.getInactivePosts();
  }
}
