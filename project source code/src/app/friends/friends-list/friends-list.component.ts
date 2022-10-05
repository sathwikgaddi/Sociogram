import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  private postsSub: Subscription;
  friends = []
  constructor(public authService: AuthService,
              public friendsService: FriendsService) { }

  ngOnInit() {

    let idd = this.authService.getUserId();
    this.friendsService.getMyFriends();
    this.postsSub = this.friendsService
      .getFriendsUpdateListener()
      .subscribe((friendsData: { friends: any[] }) => {
      this.friends = friendsData.friends;
      console.log(this.friends)
      });
  }

  onRemoveFriend(username: String) {
    console.log(username)
    this.friendsService.removeFriend(username);

  }

}
