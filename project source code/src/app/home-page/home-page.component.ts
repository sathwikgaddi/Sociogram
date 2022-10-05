import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  userIsAuthenticated = false;
  username = "";
  private authListenerSubs: Subscription;
  private usernameSubs: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
