import {Page, NavController} from 'ionic-angular';

import {UserService} from "../../services/user.service";
import {ScanPage} from "../scan/scan";

@Page({
  templateUrl: 'build/pages/event-list/event-list.page.html',
})
export class EventListPage {
  public events: Object;
  constructor(private _userService: UserService, private _nav: NavController) { }

  onPageLoaded() {
    this.getEvents();
  }

  private getEvents() {
  }

  public scanForRide(id: string, name: string) {
    this._nav.push(ScanPage, {
      eventName: name,
      eventId: id
    });
  }
}
