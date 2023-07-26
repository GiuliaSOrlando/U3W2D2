import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/posts.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts: Post[] = this.activePosts();
  constructor(private service: PostsService) {}
  activePosts() {
    return this.service.getActivePosts();
  }
}
