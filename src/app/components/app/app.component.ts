import { Component } from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import validate = WebAssembly.validate;
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];
  comments: Comment[];
  post: Post;
  comment: Comment;
  id: any;
  CommentId: any;

  constructor(private postService: PostService, private commentService: CommentService) {
    postService.getPosts().subscribe(value => this.posts = value);
    commentService.getComments().subscribe(value => this.comments = value);
  }

  findPost() {
    this.postService.getOnePost(this.id).subscribe(value => this.post = value);
  }

  findComment() {
    this.commentService.getOneComment(this.CommentId).subscribe(value => this.comment = value);
  }
}
