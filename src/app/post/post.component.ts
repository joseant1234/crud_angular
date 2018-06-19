import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

import {Router} from '@angular/router';


import { IPost } from '../structures/posts';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : any;

  constructor(private postS : PostService, private route: Router) { }

  ngOnInit() {
    this.postS.getAll().subscribe((data)=>{
      this.posts = data;
    })
  }

  newPost(){
    this.route.navigate(['/posts/new'])
  }

}
