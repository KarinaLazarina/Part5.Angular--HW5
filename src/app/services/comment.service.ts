import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
  getOneComment(id: number): Observable<Comment>{
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}
