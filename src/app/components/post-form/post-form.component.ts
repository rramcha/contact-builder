import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<any> = new EventEmitter();
  constructor(public PostsService: PostsService) { }

  ngOnInit() {
  }

  savePost(title, body){
    if(title && body){
      this.PostsService.savePosts(title, body).subscribe((posts)=>{
        this.newPost.emit(posts);
        console.log(posts)});
    }else{
      alert('Please enter posts');
    }
  }
}
