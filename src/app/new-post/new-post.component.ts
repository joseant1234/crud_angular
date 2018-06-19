import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  title : string;
  description: string;

  constructor(private postS : PostService) { }

  ngOnInit() {}

  savePost(){
    this.postS.save({title: this.title,description: this.description})
    .subscribe((data)=>{
      console.log(data)
    })
  }

}
