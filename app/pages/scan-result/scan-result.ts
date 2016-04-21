import {Page, NavController, NavParams} from "ionic-angular";

@Page({
    templateUrl: "build/pages/scan-result/scan-result.page.html",
    directives: []
})

export class ScanResultPage{
  public scannedText: string;
    constructor(private _params: NavParams){
    }

    onPageLoaded() {
      this.scannedText = this._params.get("scannedText");
    }
}
