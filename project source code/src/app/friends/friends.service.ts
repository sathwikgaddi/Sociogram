import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { AuthData } from "../auth/auth-data.model";

const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({ providedIn: "root" })
export class FriendsService {
  

    private similarFriends = [];
    private friends = [];
    private similarFriendsUpdated = new Subject<{ similarFriends: any[]; friendsCount: number }>();
    private friendsUpdated = new Subject<{friends: any[]}>();

    constructor(private http: HttpClient, private router: Router) {}



    getFriends() {

        console.log("this is called")

        this.http
      .get<{ message: string; similarfriends: any[]; maxSimilarFriends: number }>(
        BACKEND_URL 
      )
      .pipe(
        map(similarFriendsData => {
          console.log(similarFriendsData);
          return {
            
            similarFriends: similarFriendsData.similarfriends.map(f => {
              
              return {
                interests: f.interests,
                username: f.username,
                email: f.email,
                id: f._id
              };
            }),
            maxPosts: similarFriendsData.maxSimilarFriends
          };
        })
      )
      .subscribe(transformedSimilarFriendsData => {
        this.similarFriends = transformedSimilarFriendsData.similarFriends;
        this.similarFriendsUpdated.next({
          similarFriends: [...this.similarFriends],
          friendsCount: transformedSimilarFriendsData.maxPosts
        });
      });
  }


  getSimilarFriendsUpdateListener() {
    return this.similarFriendsUpdated.asObservable();
  }


  addFriend(username: String) {
    let friendData: any = {
        username : username
      };
    this.http
      .put(BACKEND_URL + 'addfriend/' + username, friendData)
      .subscribe(response => {
        this.router.navigate(["/viewFriends"]);
      });
  }

  removeFriend(username: String) {

    let friendData: any = {
      username : username
    };
    this.http
      .put(BACKEND_URL + 'unfriend/' + username, friendData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });

  }

  getMyFriends() {

  this.http
  .get<{ message: string; friends: any[] }>(
    BACKEND_URL+"myFriends"
  )
  .subscribe(myFriends => {
    this.friends = myFriends.friends;
    this.friendsUpdated.next({
      friends: [...this.friends]
    });
  });
}
getFriendsUpdateListener() {
  return this.friendsUpdated.asObservable();
}
}

   


