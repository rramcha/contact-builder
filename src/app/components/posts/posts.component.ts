import { Component, OnInit } from '@angular/core';
import {post} from '../../models/post';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: post[];
  constructor(public PostsService: PostsService) { }

  ngOnInit() {
    this.PostsService.getPosts().subscribe(
      data => this.post = data,
      error => console.log(error.statusText)
);

  // this.PostsService.getPosts().subscribe(function(data) {
  //   this.post = data;
  //   console.log(data);
  // }, function(err) {
  //   console.log(err.statusText);
  // });
  }
  onNewPost(post){
    this.post.unshift(post);
  }

}
