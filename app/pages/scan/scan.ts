import {Page, NavController, NavParams} from "ionic-angular";
import {BarcodeScanner} from "ionic-native";

//Custom imports
import {ScanResultPage} from "../scan-result/scan-result.ts";
import {UserService} from "../../services/user.service";

@Page({
  templateUrl: "build/pages/scan/scan.page.html",
})

export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: string;
  public eventName: string;

  constructor(
    private _nav: NavController,
    private _http: Http,
    private _params: NavParams,
    private _userService: UserService) {

  }

  onPageLoaded() {
    this.eventId = this._params.get('eventId');
    this.eventName = this._params.get('eventName');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    BarcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.checkPass(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult() {
    this._nav.push(ScanResultPage);
  }

  private checkPass(data) {
  }
}
