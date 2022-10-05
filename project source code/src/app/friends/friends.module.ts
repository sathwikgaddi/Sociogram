import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindFriendsComponent } from './find-friends/find-friends.component';

import { AngularMaterialModule } from "../angular-material.module";
import { RouterModule } from '@angular/router';
import { FriendsListComponent } from './friends-list/friends-list.component';


@NgModule({
  declarations: [FindFriendsComponent, FriendsListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class FriendsModule { }
