import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { FindFriendsComponent } from "./friends/find-friends/find-friends.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ViewDiscussionComponent } from "./discussion-forum/view-discussion/view-discussion.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FriendsListComponent } from "./friends/friends-list/friends-list.component";
import { CreateDiscussionComponent } from "./discussion-forum/create-discussion/create-discussion.component";
import { MydiscussionComponent } from "./discussion-forum/mydiscussion/mydiscussion.component";
import { MyPostListComponent } from "./posts/my-post-list/my-post-list.component";
import { ChangePasswordComponent } from "./auth/change-password/change-password.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  {
    path: "edit/:postId",
    component: PostCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: "viewPosts", component: PostListComponent, canActivate: [AuthGuard] },
  {
    path: "viewMyPosts",
    component: MyPostListComponent,
    canActivate: [AuthGuard],
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "find-friend", component: FindFriendsComponent },
  { path: "createDiscussion", component: CreateDiscussionComponent },
  { path: "viewDiscussions", component: ViewDiscussionComponent },
  { path: "myDiscussions", component: MydiscussionComponent },
  { path: "addfriend/:fId", component: FindFriendsComponent },
  { path: "viewFriends", component: FriendsListComponent },
  { path: "changePassword", component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
