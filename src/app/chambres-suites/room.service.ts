import { of } from "rxjs";
import { ROOMS } from "./rooms";
import { Room } from "./room";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getAvailableRooms(arrival: Date) {
    return of(ROOMS);
    // return this.http
    // .post("http://localhost:57553/api/rooms", arrival)
    // .pipe(map((availableRooms: Room[]) => availableRooms));
  }
}
