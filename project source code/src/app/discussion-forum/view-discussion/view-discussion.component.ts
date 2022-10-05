import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscussionForumService } from '../discussion-forum.service';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-discussion',
  templateUrl: './view-discussion.component.html',
  styleUrls: ['./view-discussion.component.css']
})
export class ViewDiscussionComponent implements OnInit {


  discussions: any[] = [];
  answer: string = '';
  private discussionsSub: Subscription;

  constructor(public disService: DiscussionForumService) { }

  ngOnInit() {
    this.disService.getDiscussions();
      this.discussionsSub = this.disService
      .getDiscussionUpdateListener()
      .subscribe((discussionData:{discussions: any[]}) => {
        this.discussions = discussionData.discussions
      })

  }

  
  updateAnswer(id) {
    this.disService.addAnswer(id, this.answer)
  }

  onVote(answer, id, type: string) {
    console.log("in component" + type)
    this.disService.addVote(answer, id, type)
  }

}
