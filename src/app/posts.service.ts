import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    console.log(this.url);
    return this.http.get(this.url);
  }
}
