import {Page, NavController} from 'ionic-angular';

import {ScanPage} from "../scan/scan";

@Page({
  templateUrl: 'build/pages/event-list/event-list.page.html',
})
export class EventListPage {
  public events: Array<{ id: number, title: string }>;
  constructor(private _nav: NavController) { }

  onPageLoaded() {
    this.getEvents();
  }

  private getEvents() {
    this.events = new Array<{ id: number, title: string }>();
    for (var index = 0; index < 10; index++) {
      this.events.push({ id: index, title: "Test" + index });
    }
  }

  public scanForRide(id: number, title: string) {
    this._nav.push(ScanPage, {
      eventId: id,
      eventTitle: title
    });
  }
}
