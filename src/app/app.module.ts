import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';

import { routes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
