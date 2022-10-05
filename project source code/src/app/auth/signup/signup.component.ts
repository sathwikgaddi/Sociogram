import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

interface Interests {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {

  interests: Interests[] = [
    {value: 'cricket', viewValue: 'cricket'},
    {value: 'football', viewValue: 'football'},
    {value: 'hockey', viewValue: 'hockey'},
    {value: 'food', viewValue: 'food'},
    {value: 'human science', viewValue: 'human science'},
    {value: 'computer science', viewValue: 'computer science'}
  ];
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    let interestsArray = [form.value.interest1, form.value.interest2]
    console.log(form.value.email)
    this.authService.createUser(form.value.email, form.value.password, form.value.username, interestsArray );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
