import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';

export const routes = [
  {path: '', component: PostComponent, pathMatch: 'full'},
  {path: 'posts/new', component: NewPostComponent } ,

]
