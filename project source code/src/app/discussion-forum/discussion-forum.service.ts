import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { stringify } from "querystring";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Discussion } from "./discussions.model";


const BACKEND_URL = environment.apiUrl + "/discussions/";

@Injectable({ providedIn: "root" })
export class DiscussionForumService {

    private discussions: Discussion[] = [];
    private discussionsUpdated = new Subject<{ discussions: any[]}>();
    private mydiscussionsUpdated = new Subject<{ discussions: any[]}>();


    constructor(private http: HttpClient, private router: Router) {}

    createDiscussion(title: string, content: string) {
        console.log(title)
        const discussionData: Discussion = {title: title, content: content, answers: []};
        console.log(discussionData)
        this.http
        .post<{ message: string; discussion: Discussion }>(
            BACKEND_URL,
            discussionData
        )
        .subscribe(responseData => {
            console.log(responseData.message);
            this.router.navigate(["/viewDiscussions"]);
        });
    }

    getDiscussions() {
        // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
          .get<{ message: string; discussions: any; maxPosts: number }>(
            BACKEND_URL 
          )
          
          .subscribe(discussionsData => {
            this.discussions = discussionsData.discussions;
            this.discussionsUpdated.next({
              discussions: [...this.discussions]
            });
          });
      }
    
      getDiscussionUpdateListener() {
        return this.discussionsUpdated.asObservable();
      }


      addAnswer(disId: string, answer:string) {

        let answerData: any = {
          answer : answer
        };
      this.http
        .put(BACKEND_URL + 'addAnswer/' + disId, answerData)
        .subscribe(response => {
          this.redirectTo('/viewDiscussions');
        });
      }

      redirectTo(uri:string){
        this.router.navigateByUrl('/createDiscussion', {skipLocationChange: true}).then(()=>
        this.router.navigate([uri]));
     }

     addVote(answer: string, id: any, type: string ) {

      console.log("in service" + type)
      let answerData: any = {
        answer : answer,
        type: type
      };
    this.http
      .put(BACKEND_URL + 'addVote/' + id, answerData)
      .subscribe(response => {
        this.redirectTo('/viewDiscussions');
      });
     }


     getMyDiscussions() {
      // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
      this.http
        .get<{ message: string; discussions: any; maxPosts: number }>(
          BACKEND_URL + "myDiscussions"
        )
        
        .subscribe(discussionsData => {
          this.discussions = discussionsData.discussions;
          this.mydiscussionsUpdated.next({
            discussions: [...this.discussions]
          });
        });
    }

    getMyDiscussionUpdateListener() {
      return this.mydiscussionsUpdated.asObservable();
    }

    deleteDiscussion(id: string) {
        console.log(BACKEND_URL +  id)
        return this.http.delete(BACKEND_URL +  id);
      
    }

}