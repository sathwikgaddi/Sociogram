import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDiscussionComponent } from './create-discussion/create-discussion.component';
import { ViewDiscussionComponent } from './view-discussion/view-discussion.component';
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MydiscussionComponent } from './mydiscussion/mydiscussion.component';

@NgModule({
  declarations: [CreateDiscussionComponent, ViewDiscussionComponent, MydiscussionComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule

  ]
})
export class DiscussionForumModule { }
