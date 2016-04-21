import {Page, Loading, NavController} from "ionic-angular";

import {EventListPage}  from "../event-list/event-list";
import {UserService} from "../../services/user.service";

@Page({
  templateUrl: "build/pages/login/login.page.html",
})
export class LoginPage {
  public username: string;
  public password: string;

  constructor(private _nav: NavController) { }

  public login() {

    let loading = Loading.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });

    let loginData = {
      username: this.username,
      password: this.password
    };

    this._nav.present(loading);

    this._nav.push(EventListPage);
  }
}
