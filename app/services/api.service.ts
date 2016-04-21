import {Injectable} from "angular2/core";
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private headers = new Headers();
  private userAuth: string;
  constructor(private _http: Http) { }

  public addHeader(headerKey: string, headerContent) {
    this.headers.append(headerKey, headerContent);
  }

  public setUserAuth(email: string, password: string) {
    this.userAuth = "Basic " + btoa(`${email}:${password}`);
    this.addHeader("Authorization", this.userAuth);
  }

  public getUserAuth() {
    return this.userAuth;
  }

  public get() {
    // this._http.get(url, {
    // headers: this.headers
    // })
    //   .map(res => res.json())
    //   .subscribe(value, error, complete);
  }
}
