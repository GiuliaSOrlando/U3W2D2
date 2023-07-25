import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: any

  constructor(private service: PostsService) {
    ngOnInit() {
      this.service.getPosts()
        .subscribe(posts => {
          this.posts = posts;
        });
  }
}

}
