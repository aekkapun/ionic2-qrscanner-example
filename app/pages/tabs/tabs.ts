import {Page} from "ionic-angular";

import {ScanPage} from "../scan/scan";
import {Page2} from "../page2/page2";
import {Login} from "../login/login";

@Page({
  templateUrl: "build/pages/tabs/tabs.html"
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ScanPage;
  tab2Root: any = Page2;
  tab3Root: any = Login;
}
