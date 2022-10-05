import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DiscussionForumService } from '../discussion-forum.service';


@Component({
  selector: 'app-create-discussion',
  templateUrl: './create-discussion.component.html',
  styleUrls: ['./create-discussion.component.css']
})
export class CreateDiscussionComponent implements OnInit {

  form: FormGroup;

  constructor(public disService: DiscussionForumService) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(60)]
      }),
      content: new FormControl(null, { validators: [Validators.required] })
    });

  }

  onSaveDiscussion() {
   this.disService.createDiscussion(this.form.value.title, this.form.value.content)
  }

}
