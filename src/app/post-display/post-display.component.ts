import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
import { PostModel } from '../Models/post-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts: PostModel[] = [];

  newPosts: PostModel[] = [];

  constructor(private postService: PostService, private route: Router) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.fetchPost().subscribe((data: PostModel[])=>{
      this.posts = data;
      console.log(this.posts);
    }); 
  }
}



