import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscussionForumService } from '../discussion-forum.service';

@Component({
  selector: 'app-mydiscussion',
  templateUrl: './mydiscussion.component.html',
  styleUrls: ['./mydiscussion.component.css']
})
export class MydiscussionComponent implements OnInit {
  
  private discussionsSub: Subscription;
  private discussions: any[] = []
  constructor(public disService: DiscussionForumService) { }

  ngOnInit() {
    this.disService.getMyDiscussions();
      this.discussionsSub = this.disService
      .getMyDiscussionUpdateListener()
      .subscribe((discussionData:{discussions: any[]}) => {
        this.discussions = discussionData.discussions
      })
  }

  onVote(answer, id, type: string) {
    console.log("in component" + type)
    this.disService.addVote(answer, id, type)
  }

  deleteDiscussion(id) {
    console.log("came to ts")
    this.disService.deleteDiscussion(id).subscribe(() => {
      this.disService.getMyDiscussions();
    });
    // }, () => {
    //   this.isLoading = false;
    // });

  }
}
