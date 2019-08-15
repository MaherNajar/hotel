import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

export interface UserInfo {
  expires: Date;
  issued: Date;
  access_token: string;
  expires_in: number;
  token_type: string;
  userName: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  headers: HttpHeaders;

  get userInfo() {
    return this.getUserInfo();
  }

  private getUserInfo() {
    let storageItem = sessionStorage.getItem("accessToken");
    if (!storageItem) return null;

    let userInfo = JSON.parse(storageItem);

    this.headers = new HttpHeaders({
      Authorization: "Bearer " + userInfo.access_token
    });

    return of(userInfo);
  }

  login(username, password) {
    let credentials = `username=${username}&password=${password}&grant_type=password`;

    return this.http.post("http://localhost:57553/token", credentials).pipe(
      map(response => {
        sessionStorage.setItem("accessToken", JSON.stringify(response));
      }),
      catchError((err: HttpErrorResponse) => of(err.error.error_description))
    );
  }

  logout() {
    sessionStorage.removeItem("accessToken");
    this.headers = null;
  }
}
