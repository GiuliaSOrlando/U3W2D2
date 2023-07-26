import { Component, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../Model/post';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  constructor(private service: PostsService) {}
  getPosts() {
    return this.service.getPosts();
  }
  modifyPosts() {
    return this.service.getModifyPosts();
  }

  @Input() status!: string;
  @Output() onChangeStatus = new EventEmitter();

  changestatus(status: string) {
    this.onChangeStatus.emit(status);
    if (status === 'active') {
      this.status = 'inactive';
    } else if (status === 'inactive') {
      this.status = 'active';
    }
  }
}