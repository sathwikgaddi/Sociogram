import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FpassComponent } from "./fpass/fpass.component";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "fpass", component: FpassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
