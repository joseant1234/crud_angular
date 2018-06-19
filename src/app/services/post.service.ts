import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from '../structures/posts';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService{

  constructor(private http : HttpClient){}

  getAll(){
    return this.http.get('http://localhost:3000/posts.json')

  }

  save(post){
    return this.http.post('http://localhost:3000/posts',post)
  }
}
