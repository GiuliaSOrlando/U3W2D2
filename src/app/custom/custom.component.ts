import { ActivePostsComponent } from './../pages/active-posts/active-posts.component';
import { Component, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/Model/post';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  constructor(private service: PostsService) {}

  @Input() status!: string;
  @Input() id!: number;

  changestatus(id: number) {
    this.service.getModifyPosts(id);
  }
}
