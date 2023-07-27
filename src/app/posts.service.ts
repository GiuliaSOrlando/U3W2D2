import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];
  inactivePosts: Post[] = [];
  activePosts: Post[] = [];
  url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    return fetch(this.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error');
        }
      })
      .then((posts) => {
        posts.forEach((singlepost: Post) => {
          this.posts.push(singlepost);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInactivePosts() {
    this.getPosts();
    this.inactivePosts = this.posts.filter(
      (post) => post.status === 'inactive'
    );
    this.posts = [];
    return this.inactivePosts;
  }

  getActivePosts() {
    this.getPosts();
    this.activePosts = this.posts.filter((post) => post.status === 'active');
    this.posts = [];
    return this.activePosts;
  }

  getModifyPosts(id: number) {
    // filter id-status
    const found = this.posts.filter((post) => post.id === id)[0];
    return fetch(this.url + '/' + id, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify({
        status: found.status === 'active' ? 'inactive' : 'active',
      }),
    }).catch((err) => {
      console.log(err);
    });
  }
}
