import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
 httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

postData = {};
  constructor(private http: HttpClient) { }

  getPosts(): Observable<post[]>{
    return this.http.get<post[]>(this.postsUrl);
  }
  savePosts(title, body): Observable<post>{
    this.postData = {
      'title': title,
      'body': body
    };
    return this.http.post<post>(this.postsUrl, this.postData, this.httpOptions);
  }
}
