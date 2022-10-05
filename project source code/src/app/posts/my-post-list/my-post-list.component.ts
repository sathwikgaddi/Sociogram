import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-my-post-list',
  templateUrl: './my-post-list.component.html',
  styleUrls: ['./my-post-list.component.css']
})
export class MyPostListComponent implements OnInit {

  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;
  // private authStatusSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {

    this.postsService.getMyPosts(this.postsPerPage, this.currentPage);
    this.postsSub = this.postsService
      .getMyPostUpdateListener()
      .subscribe((postData: { myposts: Post[]; postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.myposts;
      });

      

  }


  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getMyPosts(this.postsPerPage, this.currentPage);
    }, () => {
      this.isLoading = false;
    });
  }

}
