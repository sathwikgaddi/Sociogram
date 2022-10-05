import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { FriendsModule } from '../friends.module';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {

  private postsSub: Subscription;
  private mode = "find";
  private fId:String;
  similarFriends = []
  similarFriendsCount = 0


  constructor(public friendsService: FriendsService, 
              public route: ActivatedRoute, 
              public authService: AuthService) { }

  ngOnInit() {
    let idd = this.authService.getUserId();
    this.friendsService.getFriends();
    this.postsSub = this.friendsService
      .getSimilarFriendsUpdateListener()
      .subscribe((friendsData: { similarFriends: any[]; friendsCount: number }) => {
        // this.isLoading = false;
        this.similarFriendsCount = friendsData.friendsCount;
        this.similarFriends = friendsData.similarFriends;
        let i = 0;
        this.similarFriends.forEach(function (value) {
          if(value.id == idd) {
            
          }
      });
      });
    }



  onAddFriend(username: string) {
    this.friendsService.addFriend(username);
  }

  

}
