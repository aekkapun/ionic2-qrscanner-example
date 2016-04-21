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
  private eventId: number;
  public eventTitle: string;

  constructor(
    private _nav: NavController,
    private _params: NavParams) {
  }

  onPageLoaded() {
    this.eventId = this._params.get('eventId');
    this.eventTitle = this._params.get('eventTitle');

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
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
  }

  private checkPass(data) {
  }
}
